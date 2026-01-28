const FlowMeterTable = () => {
  return (
    <>
      <style>{`
        /* ===== LIGHT MODE (DEFAULT) ===== */
        :root {
          --mg-green: #7ACC15;
          --mg-green-dark: #6AB510;
          --mg-bg-soft: #f0fde4;

          --text-primary: #1e293b;
          --text-secondary: #334155;
          --text-muted: #64748b;

          --border: #d1d5db;
          --border-light: #e5e7eb;
          --row-border: #f1f5f9;
          --surface: #ffffff;
          --surface-hover: rgba(122, 204, 21, 0.08);
          --header-bg: #f0fde4;
          --header-border: #7AC142;
        }

        /* ===== DARK MODE ===== */
        .dark {
          --mg-green: #9FFB1E;
          --mg-green-dark: #9FFB1E;
          --mg-bg-soft: rgba(159, 251, 30, 0.12);

          --text-primary: #f1f5f9;
          --text-secondary: #cbd5e1;
          --text-muted: #94a3b8;

          --border: rgba(255, 255, 255, 0.12);
          --border-light: rgba(255, 255, 255, 0.06);
          --row-border: rgba(255, 255, 255, 0.08);
          --surface: rgba(15, 23, 42, 0.4);
          --surface-hover: rgba(159, 251, 30, 0.1);
          --header-bg: rgba(15, 23, 42, 0.95);
          --header-border: rgba(159, 251, 30, 0.4);
        }

        /* Auto-detection via prefers-color-scheme */
        @media (prefers-color-scheme: dark) {
          :root:not(.light) {
            --mg-green: #9FFB1E;
            --mg-green-dark: #9FFB1E;
            --mg-bg-soft: rgba(159, 251, 30, 0.12);

            --text-primary: #f1f5f9;
            --text-secondary: #cbd5e1;
            --text-muted: #94a3b8;

            --border: rgba(255, 255, 255, 0.12);
            --border-light: rgba(255, 255, 255, 0.06);
            --row-border: rgba(255, 255, 255, 0.08);
            --surface: rgba(15, 23, 42, 0.4);
            --surface-hover: rgba(159, 251, 30, 0.1);
            --header-bg: rgba(15, 23, 42, 0.95);
            --header-border: rgba(159, 251, 30, 0.4);
          }
        }

        /* ===== MAIN WRAPPER ===== */
        .fm-wrapper {
          margin-bottom: 6rem;
        }

        /* ===== HEADINGS ===== */
        .fm-title {
          font-size: 1.875rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
          letter-spacing: -0.3px;
          text-align: center;
          position: relative;
        }

        .fm-subtitle {
          font-size: 15px;
          color: var(--text-secondary);
          max-width: 640px;
          margin: 0 auto 2rem;
          line-height: 1.5;
          text-align: center;
        }

        /* ===== SCROLLABLE TABLE ===== */
        .fm-table-scroll {
          max-height: 650px;
          overflow-y: auto;
          border-radius: 14px;
          background: var(--surface);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);
          border: 1px solid var(--border);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .fm-table-scroll::-webkit-scrollbar {
          display: none;
        }

        @media (prefers-color-scheme: dark) {
          .fm-table-scroll {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), 0 1px 4px rgba(0, 0, 0, 0.3);
          }
        }

        .dark .fm-table-scroll {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), 0 1px 4px rgba(0, 0, 0, 0.3);
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 15.5px;
        }

        /* ===== TABLE HEADERS ===== */
        thead th {
          position: sticky;
          top: 0;
          background: var(--header-bg);
          padding: 20px 24px;
          font-size: 0.9375rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          text-align: left;
          color: var(--text-primary);
          border-bottom: 2px solid var(--header-border);
          border-right: 1px solid var(--border-light);
          z-index: 2;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        @media (prefers-color-scheme: dark) {
          thead th {
            color: var(--mg-green);
            background: var(--header-bg);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          }
        }

        .dark thead th {
          color: var(--mg-green);
          background: var(--header-bg);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        thead th:last-child {
          border-right: none;
        }

        /* ===== TABLE BODY ===== */
        tbody td {
          padding: 20px 24px;
          vertical-align: top;
          border-bottom: 1px solid var(--row-border);
          border-right: 1px solid var(--border-light);
          line-height: 1.6;
          color: var(--text-secondary);
          background: transparent;
          transition: all 0.2s ease;
        }

        tbody td:last-child {
          border-right: none;
        }

        tbody td:first-child {
          font-weight: 700;
          color: var(--text-primary);
          width: 160px;
        }

        tbody td:nth-child(2) {
          font-weight: 600;
          color: var(--text-primary);
          width: 280px;
        }

        tbody td:last-child {
          color: var(--text-muted);
        }

        /* ===== ROW HOVER ===== */
        tbody tr {
          transition: all 0.2s ease;
        }

        tbody tr:hover {
          background: var(--surface-hover);
          transform: translateX(2px);
        }

        tbody tr:hover td:first-child {
          color: var(--mg-green-dark);
        }

        @media (prefers-color-scheme: dark) {
          tbody tr:hover td:first-child {
            color: var(--mg-green);
          }
        }

        .dark tbody tr:hover td:first-child {
          color: var(--mg-green);
        }

        tbody tr:last-child td {
          border-bottom: none;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .fm-wrapper {
            margin-bottom: 3rem;
          }

          .fm-table-scroll {
            max-height: 500px;
          }

          thead th,
          tbody td {
            padding: 16px 14px;
            font-size: 14px;
          }

          .fm-title {
            font-size: 1.5rem;
          }

          .fm-subtitle {
            font-size: 14px;
            padding: 0 1rem;
          }

          tbody td:first-child {
            width: 120px;
          }

          tbody td:nth-child(2) {
            width: 200px;
          }
        }

        @media (max-width: 640px) {
          thead th,
          tbody td {
            padding: 12px 10px;
            font-size: 13px;
          }
        }
      `}</style>

      <div className="fm-wrapper">
        <h2 className="fm-title">
          Recommended Flow Meters for Water & Utility Monitoring
        </h2>

        <p className="fm-subtitle">
          Select the most suitable flow meter based on utility type, operating
          conditions, and monitoring needs.
        </p>

        <div className="fm-table-scroll">
          <table>
            <thead>
              <tr>
                <th>Utility Type</th>
                <th>Suggested Flow Meter</th>
                <th>Operating Range &amp; Key Specifications</th>
                <th>Application &amp; Benefits</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Water</td>
                <td>Electromagnetic Flow Meter</td>
                <td>
                  Pipe size: 10–3000 mm<br />
                  Accuracy: ±0.5%<br />
                  Pressure support: up to 40 bar
                </td>
                <td>
                  Ideal for conductive liquids, ensures accurate and
                  maintenance-free water monitoring.
                </td>
              </tr>

              <tr>
                <td>Diesel</td>
                <td>Positive Displacement Flow Meter</td>
                <td>
                  High viscosity support<br />
                  Accuracy: ±0.2%<br />
                  Stable low-flow measurement
                </td>
                <td>
                  Suitable for fuel transfer and consumption tracking with high
                  precision.
                </td>
              </tr>

              <tr>
                <td>PNG / Gas</td>
                <td>Thermal Mass Flow Meter</td>
                <td>
                  Wide flow range<br />
                  Direct mass flow measurement<br />
                  Low pressure drop
                </td>
                <td>
                  Enables efficient gas flow monitoring without temperature or
                  pressure compensation.
                </td>
              </tr>

              <tr>
                <td>Compressed Air</td>
                <td>Vortex Flow Meter</td>
                <td>
                  Pressure: up to 25 bar<br />
                  High temperature tolerance<br />
                  Minimal maintenance
                </td>
                <td>
                  Designed for compressed air systems with consistent
                  performance and durability.
                </td>
              </tr>

              <tr>
                <td>Nitrogen</td>
                <td>Thermal Mass Flow Meter</td>
                <td>
                  High accuracy at low flow<br />
                  Gas-specific calibration<br />
                  Stable readings
                </td>
                <td>
                  Provides precise monitoring for inert gas distribution and
                  industrial applications.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default FlowMeterTable