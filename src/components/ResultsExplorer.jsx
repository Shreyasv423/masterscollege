import { useState, useMemo } from 'react';
import { 
  Award, 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  GraduationCap, 
  Stethoscope, 
  Zap, 
  BookMarked,
  Sparkles
} from 'lucide-react';
import resultsData from '../data_results.json';

const PAGE_SIZE = 16;

export default function ResultsExplorer() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Combine results with standardized category
  const allList = useMemo(() => {
    const list = [];
    if (resultsData.cet) {
      resultsData.cet.forEach((item, idx) => {
        list.push({ ...item, id: `cet-${idx}`, category: 'cet', examLabel: 'KCET Ranker' });
      });
    }
    if (resultsData.neet) {
      resultsData.neet.forEach((item, idx) => {
        list.push({ ...item, id: `neet-${idx}`, category: 'neet', examLabel: 'NEET Qualifier' });
      });
    }
    if (resultsData.jee) {
      resultsData.jee.forEach((item, idx) => {
        list.push({ ...item, id: `jee-${idx}`, category: 'jee', examLabel: 'JEE Qualifier' });
      });
    }
    if (resultsData.puc) {
      resultsData.puc.forEach((item, idx) => {
        list.push({ ...item, id: `puc-${idx}`, category: 'puc', examLabel: 'PU Board Distinction' });
      });
    }
    return list;
  }, []);

  // Filter based on tab and search
  const filteredList = useMemo(() => {
    let result = allList;
    if (activeTab !== 'all') {
      result = result.filter((item) => item.category === activeTab);
    }
    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          (item.details && item.details.toLowerCase().includes(q))
      );
    }
    return result;
  }, [allList, activeTab, searchTerm]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredList.length / PAGE_SIZE) || 1;
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredList.slice(start, start + PAGE_SIZE);
  }, [filteredList, currentPage]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const getInitials = (name) => {
    if (!name) return 'MP';
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((n) => n[0].toUpperCase())
      .join('');
  };

  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'cet': return { bg: '#e0f2fe', text: '#0369a1', badge: 'KCET' };
      case 'neet': return { bg: '#dcfce7', text: '#15803d', badge: 'NEET' };
      case 'jee': return { bg: '#fef3c7', text: '#b45309', badge: 'JEE' };
      case 'puc': return { bg: '#f3e8ff', text: '#7e22ce', badge: 'PU BOARD' };
      default: return { bg: '#e2e8f0', text: '#475569', badge: 'RESULT' };
    }
  };

  return (
    <section id="results" className="section results-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-title-wrap">
          <span className="section-badge gold">
            <Award size={14} />
            EXAMINATION PROWESS
          </span>
          <h2 className="section-heading">Student Results & Hall of Rankers</h2>
          <p className="section-subheading">
            Browse our verified database of students with extraordinary scores in Karnataka CET, NEET Medical, IIT-JEE, and Karnataka PU Board Distinctions.
          </p>
        </div>

        {/* Search & Category Filter Navigation */}
        <div className="results-controls-wrap">
          <div className="results-tabs">
            <button
              type="button"
              className={`results-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => handleTabChange('all')}
            >
              <Sparkles size={16} />
              <span>All Achievers ({allList.length})</span>
            </button>
            <button
              type="button"
              className={`results-tab-btn ${activeTab === 'cet' ? 'active' : ''}`}
              onClick={() => handleTabChange('cet')}
            >
              <Zap size={16} />
              <span>KCET Ranks ({resultsData.cet?.length || 0})</span>
            </button>
            <button
              type="button"
              className={`results-tab-btn ${activeTab === 'puc' ? 'active' : ''}`}
              onClick={() => handleTabChange('puc')}
            >
              <GraduationCap size={16} />
              <span>PU Board Distinctions ({resultsData.puc?.length || 0})</span>
            </button>
            <button
              type="button"
              className={`results-tab-btn ${activeTab === 'neet' ? 'active' : ''}`}
              onClick={() => handleTabChange('neet')}
            >
              <Stethoscope size={16} />
              <span>NEET Medical ({resultsData.neet?.length || 0})</span>
            </button>
            <button
              type="button"
              className={`results-tab-btn ${activeTab === 'jee' ? 'active' : ''}`}
              onClick={() => handleTabChange('jee')}
            >
              <BookMarked size={16} />
              <span>JEE Qualifiers ({resultsData.jee?.length || 0})</span>
            </button>
          </div>

          <div className="results-search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by student name, rank, or marks..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="results-search-input"
              aria-label="Search students by name or rank"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="search-clear-btn"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Count Bar */}
        <div className="results-count-bar">
          <span>
            Showing <strong>{filteredList.length}</strong> student results
            {searchTerm && ` for "${searchTerm}"`}
          </span>
          <span>Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong></span>
        </div>

        {/* Results Card Grid */}
        {currentItems.length > 0 ? (
          <div className="results-cards-grid">
            {currentItems.map((item) => {
              const theme = getCategoryColor(item.category);
              let photoSrc = null;
              if (item.img) {
                try {
                  photoSrc = `/college_assets/${decodeURIComponent(item.img)}`;
                } catch {
                  photoSrc = `/college_assets/${item.img}`;
                }
              }

              return (
                <div key={item.id} className="student-card glass-card">
                  <div className="student-card-header">
                    <span 
                      className="student-category-badge"
                      style={{ backgroundColor: theme.bg, color: theme.text }}
                    >
                      {item.examLabel}
                    </span>
                    <span className="student-dept-tag">Science Stream</span>
                  </div>

                  <div className="student-card-body">
                    <div className="student-avatar-container">
                      {photoSrc ? (
                        <img 
                          src={photoSrc} 
                          alt={item.name}
                          className="student-avatar-img"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div 
                        className="student-avatar-fallback"
                        style={{ display: photoSrc ? 'none' : 'flex' }}
                      >
                        {getInitials(item.name)}
                      </div>
                    </div>

                    <h4 className="student-name">{item.name}</h4>

                    {item.details ? (
                      <div className="student-scores-box">
                        <p className="student-scores-text">{item.details}</p>
                      </div>
                    ) : (
                      <div className="student-scores-box">
                        <p className="student-scores-text verified-text">
                          Qualified in First Attempt • Masters PU College Hassan
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="results-empty-state">
            <Filter size={36} className="empty-icon" />
            <h3>No results matched your search</h3>
            <p>Try searching for a different student name or clear the search filters.</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setActiveTab('all');
              }}
              className="btn btn-outline-primary"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="results-pagination">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="pagination-btn"
              aria-label="Previous page"
            >
              <ChevronLeft size={18} />
              <span>Previous</span>
            </button>

            <div className="pagination-pages">
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                let pageNum = i + 1;
                if (totalPages > 7 && currentPage > 4) {
                  pageNum = currentPage - 4 + i;
                  if (pageNum > totalPages) return null;
                }
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setCurrentPage(pageNum)}
                    className={`page-num-btn ${currentPage === pageNum ? 'active' : ''}`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="pagination-btn"
              aria-label="Next page"
            >
              <span>Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
