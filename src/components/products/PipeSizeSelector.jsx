import React, { useState } from 'react';

export const pipeSizes = [
  { id: 1, size: '1/2"', nominalDiameter: 15, innerDiameter: 12.7, outerDiameter: 21.3, crossSectionArea: 1.267, typicalFlowRate: 15 },
  { id: 2, size: '3/4"', nominalDiameter: 20, innerDiameter: 15.8, outerDiameter: 26.7, crossSectionArea: 1.963, typicalFlowRate: 25 },
  { id: 3, size: '1"', nominalDiameter: 25, innerDiameter: 20.9, outerDiameter: 33.4, crossSectionArea: 3.421, typicalFlowRate: 40 },
  { id: 4, size: '1.25"', nominalDiameter: 32, innerDiameter: 26.6, outerDiameter: 42.2, crossSectionArea: 5.563, typicalFlowRate: 65 },
  { id: 5, size: '1.5"', nominalDiameter: 40, innerDiameter: 35.1, outerDiameter: 48.3, crossSectionArea: 9.621, typicalFlowRate: 95 },
  { id: 6, size: '2"', nominalDiameter: 50, innerDiameter: 40.9, outerDiameter: 60.3, crossSectionArea: 13.134, typicalFlowRate: 150 },
  { id: 7, size: '2.5"', nominalDiameter: 65, innerDiameter: 52.5, outerDiameter: 73.0, crossSectionArea: 21.648, typicalFlowRate: 240 },
  { id: 8, size: '3"', nominalDiameter: 80, innerDiameter: 77.9, outerDiameter: 88.9, crossSectionArea: 47.713, typicalFlowRate: 380 },
  { id: 9, size: '4"', nominalDiameter: 100, innerDiameter: 102.3, outerDiameter: 114.3, crossSectionArea: 82.194, typicalFlowRate: 650 },
  { id: 10, size: '5"', nominalDiameter: 125, innerDiameter: 128.2, outerDiameter: 141.3, crossSectionArea: 129.113, typicalFlowRate: 1020 },
  { id: 11, size: '6"', nominalDiameter: 150, innerDiameter: 154.1, outerDiameter: 168.3, crossSectionArea: 186.542, typicalFlowRate: 1470 },
  { id: 12, size: '8"', nominalDiameter: 200, innerDiameter: 202.7, outerDiameter: 219.1, crossSectionArea: 322.831, typicalFlowRate: 2600 },
  { id: 13, size: '10"', nominalDiameter: 250, innerDiameter: 254.5, outerDiameter: 273.0, crossSectionArea: 508.709, typicalFlowRate: 4100 }
];

const DropletIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--ps-accent)" strokeWidth="2">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
  </svg>
);

const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ps-accent)" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const PipeSizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  return (
    <>
      <style>{`
        /* ===== LIGHT MODE (DEFAULT) ===== */
        :root {
          --ps-accent: #7ACC15;
          --ps-accent-dark: #6AB510;
          --ps-accent-bg: #f0fde4;
          --ps-accent-bg-hover: rgba(122, 204, 21, 0.12);

          --ps-text-primary: #1e293b;
          --ps-text-secondary: #334155;
          --ps-text-muted: #64748b;

          --ps-border: #d1d5db;
          --ps-border-light: #e5e7eb;
          --ps-surface: #ffffff;
          --ps-surface-hover: #f5f5f5;
          --ps-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

          --ps-blue-bg: #E3F2FD;
          --ps-blue-text: #1565C0;
          --ps-blue-border: #90CAF9;

          --ps-size-badge-bg: #C8E6B5;
          --ps-size-badge-text: #1B5E0B;

          --ps-highlight-bg: linear-gradient(135deg, #E6F7D5 0%, #F0FAEB 100%);
          --ps-highlight-border: #A5D68E;
          --ps-highlight-value: #1B5E0B;

          --ps-blue-highlight-bg: linear-gradient(135deg, #E3F2FD 0%, #F0F8FF 100%);

          --ps-empty-icon-bg: #F0F0F0;
          --ps-selected-row-bg: rgba(45, 122, 14, 0.1);
        }

        /* ===== DARK MODE ===== */
        .dark {
          --ps-accent: #9FFB1E;
          --ps-accent-dark: #9FFB1E;
          --ps-accent-bg: rgba(159, 251, 30, 0.2);
          --ps-accent-bg-hover: rgba(159, 251, 30, 0.15);

          --ps-text-primary: #f1f5f9;
          --ps-text-secondary: #cbd5e1;
          --ps-text-muted: #94a3b8;

          --ps-border: rgba(255, 255, 255, 0.12);
          --ps-border-light: rgba(255, 255, 255, 0.06);
          --ps-surface: rgba(30, 30, 30, 0.95);
          --ps-surface-hover: rgba(255, 255, 255, 0.05);
          --ps-shadow: none;

          --ps-blue-bg: rgba(33, 150, 243, 0.3);
          --ps-blue-text: #64B5F6;
          --ps-blue-border: rgba(33, 150, 243, 0.3);

          --ps-size-badge-bg: rgba(159, 251, 30, 0.3);
          --ps-size-badge-text: #9FFB1E;

          --ps-highlight-bg: linear-gradient(135deg, rgba(159, 251, 30, 0.25) 0%, rgba(159, 251, 30, 0.15) 100%);
          --ps-highlight-border: rgba(159, 251, 30, 0.3);
          --ps-highlight-value: #9FFB1E;

          --ps-blue-highlight-bg: linear-gradient(135deg, rgba(33, 150, 243, 0.25) 0%, rgba(33, 150, 243, 0.15) 100%);

          --ps-empty-icon-bg: rgba(255, 255, 255, 0.1);
          --ps-selected-row-bg: rgba(159, 251, 30, 0.15);
        }

        /* Auto-detection via prefers-color-scheme */
        @media (prefers-color-scheme: dark) {
          :root:not(.light) {
            --ps-accent: #9FFB1E;
            --ps-accent-dark: #9FFB1E;
            --ps-accent-bg: rgba(159, 251, 30, 0.2);
            --ps-accent-bg-hover: rgba(159, 251, 30, 0.15);

            --ps-text-primary: #f1f5f9;
            --ps-text-secondary: #cbd5e1;
            --ps-text-muted: #94a3b8;

            --ps-border: rgba(255, 255, 255, 0.12);
            --ps-border-light: rgba(255, 255, 255, 0.06);
            --ps-surface: rgba(30, 30, 30, 0.95);
            --ps-surface-hover: rgba(255, 255, 255, 0.05);
            --ps-shadow: none;

            --ps-blue-bg: rgba(33, 150, 243, 0.3);
            --ps-blue-text: #64B5F6;
            --ps-blue-border: rgba(33, 150, 243, 0.3);

            --ps-size-badge-bg: rgba(159, 251, 30, 0.3);
            --ps-size-badge-text: #9FFB1E;

            --ps-highlight-bg: linear-gradient(135deg, rgba(159, 251, 30, 0.25) 0%, rgba(159, 251, 30, 0.15) 100%);
            --ps-highlight-border: rgba(159, 251, 30, 0.3);
            --ps-highlight-value: #9FFB1E;

            --ps-blue-highlight-bg: linear-gradient(135deg, rgba(33, 150, 243, 0.25) 0%, rgba(33, 150, 243, 0.15) 100%);

            --ps-empty-icon-bg: rgba(255, 255, 255, 0.1);
            --ps-selected-row-bg: rgba(159, 251, 30, 0.15);
          }
        }

        /* ===== MAIN WRAPPER ===== */
        .ps-wrapper {
          margin-bottom: 4rem;
        }

        * {
          box-sizing: border-box;
        }

        /* ===== HEADER ===== */
        .ps-header {
          margin-bottom: 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .ps-title-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .ps-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
          color: var(--ps-text-primary);
        }

        .ps-subtitle {
          font-size: 15px;
          line-height: 1.5;
          max-width: 640px;
          color: var(--ps-text-secondary);
        }

        /* ===== TOGGLE GROUP ===== */
        /* ===== TOGGLE GROUP ===== */
.ps-toggle-group {
  display: inline-flex;
  gap: 0;
  background: var(--ps-surface);
  padding: 0.375rem;
  border-radius: 50px;
  border: 1px solid var(--ps-border);
  box-shadow: var(--ps-shadow);
}

.ps-toggle-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border: none;
  background: transparent;
  font-size: 0.9375rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  color: var(--ps-text-muted);
}

.ps-toggle-btn:hover:not(.active) {
  background: var(--ps-accent-bg-hover);
}

.ps-toggle-btn.active {
  background: #9FFB1E;
  color: #000000;
}

        /* ===== CONTENT LAYOUT ===== */
        .ps-content {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 2rem;
          align-items: start;
        }

        .ps-main-content {
          align-self: start;
        }

        /* ===== GRID VIEW ===== */
        .ps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          grid-auto-rows: min-content;
        }

        .ps-btn {
          background: var(--ps-surface);
          border: 1px solid var(--ps-border);
          border-radius: 14px;
          padding: 1.5rem 1rem;
          cursor: pointer;
          text-align: center;
          transition: all 0.2s ease;
          box-shadow: var(--ps-shadow);
        }

        .ps-btn:hover {
          transform: translateY(-2px);
          border-color: var(--ps-accent);
        }

        .ps-btn.active {
          background: var(--ps-accent-bg);
          border: 2px solid var(--ps-accent);
        }

        .ps-label {
          font-size: 1.375rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--ps-text-primary);
        }

        .ps-btn.active .ps-label {
          color: var(--ps-accent);
        }

        .ps-diameter {
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--ps-text-muted);
        }

        .ps-btn.active .ps-diameter {
          color: var(--ps-accent-dark);
        }

        /* ===== TABLE VIEW ===== */
        .ps-table-container {
          border-radius: 14px;
          border: 1px solid var(--ps-border);
          overflow: hidden;
          background: var(--ps-surface);
          box-shadow: var(--ps-shadow);
        }

        .ps-table {
          width: 100%;
          border-collapse: collapse;
        }

        .ps-table th,
        .ps-table td {
          padding: 1rem;
          text-align: center;
        }

        .ps-table th:first-child,
        .ps-table td:first-child {
          text-align: left;
          padding-left: 1.25rem;
        }

        .ps-table th:last-child,
        .ps-table td:last-child {
          padding-right: 1.25rem;
        }

        .ps-table th {
          background: var(--ps-surface);
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--ps-text-primary);
          border-bottom: 2px solid var(--ps-accent);
          letter-spacing: 0.03em;
        }

        .ps-table tbody tr {
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ps-table tbody tr:hover {
          background: var(--ps-surface-hover);
        }

        .ps-table tbody tr.selected {
          background: var(--ps-selected-row-bg);
          box-shadow: inset 4px 0 0 var(--ps-accent);
        }

        .ps-table td {
          font-size: 0.9375rem;
          color: var(--ps-text-secondary);
          border-bottom: 1px solid var(--ps-border-light);
        }

        .ps-table tbody tr:last-child td {
          border-bottom: none;
        }

        .ps-size-badge {
          display: inline-block;
          padding: 0.375rem 0.75rem;
          background: var(--ps-size-badge-bg);
          color: var(--ps-size-badge-text);
          font-weight: 700;
          border-radius: 8px;
          font-size: 0.875rem;
        }

        .ps-flow-badge {
          display: inline-block;
          padding: 0.3125rem 0.625rem;
          background: var(--ps-blue-bg);
          color: var(--ps-blue-text);
          font-weight: 600;
          border-radius: 6px;
          font-size: 0.875rem;
        }

        /* ===== INFO CARD ===== */
        .ps-info-card {
          background: var(--ps-surface);
          border-radius: 16px;
          border: 1px solid var(--ps-border);
          padding: 1.75rem;
          position: sticky;
          top: 2rem;
          align-self: start;
          box-shadow: var(--ps-shadow);
        }

        .ps-info-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--ps-accent);
        }

        .ps-info-title {
          font-size: 1.125rem;
          font-weight: 900;
          margin: 0;
          color: var(--ps-text-primary);
        }

        .ps-info-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ps-highlight {
          background: var(--ps-highlight-bg);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid var(--ps-highlight-border);
        }

        .ps-highlight.blue {
          background: var(--ps-blue-highlight-bg);
          border: 1px solid var(--ps-blue-border);
        }

        .ps-highlight-label {
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--ps-accent);
          margin-bottom: 0.375rem;
          letter-spacing: 0.05em;
        }

        .ps-highlight.blue .ps-highlight-label {
          color: var(--ps-blue-text);
        }

        .ps-highlight-value {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--ps-highlight-value);
        }

        .ps-highlight.blue .ps-highlight-value {
          color: var(--ps-blue-text);
        }

        .ps-divider {
          height: 1px;
          background: var(--ps-border);
          margin: 0.375rem 0;
        }

        .ps-info-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9375rem;
          padding: 0.5rem 0;
        }

        .ps-info-label {
          color: var(--ps-text-secondary);
          font-weight: 500;
        }

        .ps-info-value {
          color: var(--ps-accent);
          font-weight: 700;
        }

        /* ===== EMPTY STATE ===== */
        .ps-empty-state {
          text-align: center;
          padding: 2.5rem 1rem;
        }

        .ps-empty-icon {
          width: 72px;
          height: 72px;
          margin: 0 auto 1.25rem;
          border-radius: 50%;
          background: var(--ps-empty-icon-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ps-text-muted);
          border: 1px solid var(--ps-border);
        }

        .ps-empty-title {
          font-size: 1.125rem;
          font-weight: 800;
          color: var(--ps-text-secondary);
          margin-bottom: 0.5rem;
        }

        .ps-empty-text {
          font-size: 0.9375rem;
          color: var(--ps-text-muted);
          line-height: 1.6;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .ps-content {
            grid-template-columns: 1fr;
          }

          .ps-info-card {
            position: static;
          }
        }

        @media (max-width: 900px) {
          .ps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .ps-grid {
            grid-template-columns: 1fr;
          }

          .ps-header {
            flex-direction: column;
            gap: 1rem;
          }

          .ps-title {
            font-size: 1.5rem;
          }

          .ps-table th,
          .ps-table td {
            padding: 0.75rem 0.5rem;
            font-size: 0.8125rem;
          }
        }
      `}</style>

      <div className="ps-wrapper">
        <div className="ps-header">
          <div style={{ flex: 1 }}>
            <div className="ps-title-wrapper">
              <DropletIcon />
              <h2 className="ps-title">Pipe Size Selector</h2>
            </div>
            <p className="ps-subtitle">
              Select a pipe size to view detailed specifications and flow characteristics.
            </p>
          </div>

          <div className="ps-toggle-group">
            <button
              onClick={() => setViewMode('grid')}
              className={`ps-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="1" y="1" width="6" height="6" rx="1"></rect>
                <rect x="9" y="1" width="6" height="6" rx="1"></rect>
                <rect x="1" y="9" width="6" height="6" rx="1"></rect>
                <rect x="9" y="9" width="6" height="6" rx="1"></rect>
              </svg>
              Grid
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`ps-toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="3" y1="15" x2="21" y2="15"></line>
                <line x1="9" y1="3" x2="9" y2="21"></line>
                <line x1="15" y1="3" x2="15" y2="21"></line>
              </svg>
              Table
            </button>
          </div>
        </div>

        <div className="ps-content">
          <div className="ps-main-content">
            {viewMode === 'grid' ? (
              <div className="ps-grid">
                {pipeSizes.map((pipe) => (
                  <button
                    key={pipe.id}
                    onClick={() => setSelectedSize(pipe)}
                    className={`ps-btn ${selectedSize?.id === pipe.id ? 'active' : ''}`}
                  >
                    <div className="ps-label">{pipe.size}</div>
                    <div className="ps-diameter">{pipe.nominalDiameter}mm</div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="ps-table-container">
                <table className="ps-table">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Nominal</th>
                      <th>Inner</th>
                      <th>Outer</th>
                      <th>Area (cm²)</th>
                      <th>Flow</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pipeSizes.map((pipe) => (
                      <tr
                        key={pipe.id}
                        onClick={() => setSelectedSize(pipe)}
                        className={selectedSize?.id === pipe.id ? 'selected' : ''}
                      >
                        <td>
                          <span className="ps-size-badge">{pipe.size}</span>
                        </td>
                        <td>{pipe.nominalDiameter} mm</td>
                        <td>{pipe.innerDiameter} mm</td>
                        <td>{pipe.outerDiameter} mm</td>
                        <td>{pipe.crossSectionArea.toFixed(3)}</td>
                        <td>
                          <span className="ps-flow-badge">{pipe.typicalFlowRate} L/min</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="ps-info-card">
            {selectedSize ? (
              <>
                <div className="ps-info-header">
                  <InfoIcon />
                  <h3 className="ps-info-title">Selected Specifications</h3>
                </div>

                <div className="ps-info-content">
                  <div className="ps-highlight">
                    <div className="ps-highlight-label">Pipe Size</div>
                    <div className="ps-highlight-value">{selectedSize.size}</div>
                  </div>

                  <div className="ps-divider"></div>

                  <div className="ps-info-row">
                    <span className="ps-info-label">Nominal Diameter</span>
                    <span className="ps-info-value">{selectedSize.nominalDiameter} mm</span>
                  </div>

                  <div className="ps-info-row">
                    <span className="ps-info-label">Inner Diameter</span>
                    <span className="ps-info-value">{selectedSize.innerDiameter} mm</span>
                  </div>

                  <div className="ps-info-row">
                    <span className="ps-info-label">Outer Diameter</span>
                    <span className="ps-info-value">{selectedSize.outerDiameter} mm</span>
                  </div>

                  <div className="ps-info-row">
                    <span className="ps-info-label">Cross-Section</span>
                    <span className="ps-info-value">{selectedSize.crossSectionArea.toFixed(3)} cm²</span>
                  </div>

                  <div className="ps-divider"></div>

                  <div className="ps-highlight blue">
                    <div className="ps-highlight-label">Flow Rate</div>
                    <div className="ps-highlight-value">
                      {selectedSize.typicalFlowRate} <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>L/min</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="ps-empty-state">
                <div className="ps-empty-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4M12 8h.01"></path>
                  </svg>
                </div>
                <h4 className="ps-empty-title">No Pipe Selected</h4>
                <p className="ps-empty-text">
                  Click on a pipe size from the {viewMode === 'grid' ? 'grid' : 'table'} to view its detailed specifications
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PipeSizeSelector;