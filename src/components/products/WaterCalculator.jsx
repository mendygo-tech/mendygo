import React, { useState } from 'react'

const WaterCalculator = () => {
  const [inputs, setInputs] = useState({
    pipeDiameter: '',
    flowVelocity: '',
    timeDuration: '',
    initialPressure: '',
    waterTemp: '',
  })

  const [results, setResults] = useState({
    pressure: null,
    temperature: null,
    totalConsumption: null,
    instantaneousFlowRate: null,
  })

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  // Water density based on temperature (kg/m³)
  // Reference: Tanaka et al. (2001), Metrologia 38(4):301-309
  const getWaterDensity = (tempC) => {
    const t = tempC || 20
    return 999.842594 +
      6.793952e-2 * t -
      9.095290e-3 * Math.pow(t, 2) +
      1.001685e-4 * Math.pow(t, 3) -
      1.120083e-6 * Math.pow(t, 4) +
      6.536336e-9 * Math.pow(t, 5)
  }

  const calculate = () => {
    // ===== INPUT VALUES =====
    const diameter = parseFloat(inputs.pipeDiameter) || 0        // mm
    const velocity = parseFloat(inputs.flowVelocity) || 0        // m/s
    const time = parseFloat(inputs.timeDuration) || 0            // minutes
    const initialP = parseFloat(inputs.initialPressure) || 0     // PSI
    const waterTemp = parseFloat(inputs.waterTemp) || 20         // °C

    // Validation
    if (diameter <= 0 || velocity <= 0) {
      return
    }

    // ===== CONSTANTS =====
    const g = 9.80665           // m/s² (ISO 80000-3:2019)
    const PSI_TO_PA = 6894.76   // NIST
    const cp = 4186             // J/(kg·K) - Specific heat of water

    // ===== WATER PROPERTIES =====
    const density = getWaterDensity(waterTemp)

    // ===== 1. CROSS-SECTIONAL AREA =====
    // Formula: A = π × (D/2)²
    // Reference: Euclidean Geometry
    const diameterM = diameter / 1000
    const radiusM = diameterM / 2
    const areaSqM = Math.PI * Math.pow(radiusM, 2)

    // ===== 2. VOLUMETRIC FLOW RATE =====
    // Formula: Q = A × v (Continuity Equation)
    // Reference: Fox & McDonald, "Introduction to Fluid Mechanics"
    // Unit: cm³/hr = m³/s × 10⁶ × 3600
    const flowRateM3S = areaSqM * velocity
    const flowRateCm3Hr = flowRateM3S * 1e6 * 3600

    // ===== 3. TOTAL CONSUMPTION =====
    // Formula: V = Q × t
    // Reference: Basic physics
    const timeHours = time / 60
    const totalConsumptionCm3 = flowRateCm3Hr * timeHours

    // ===== 4. PRESSURE (Bernoulli's Equation) =====
    // Formula: P_total = P_static + P_dynamic
    // P_dynamic = ½ρv² (Dynamic/Velocity Pressure)
    // Reference: Bernoulli, D. (1738) "Hydrodynamica"
    const staticPressurePa = initialP * PSI_TO_PA
    const dynamicPressurePa = 0.5 * density * Math.pow(velocity, 2)
    const totalPressurePa = staticPressurePa + dynamicPressurePa
    const pressurePSI = totalPressurePa / PSI_TO_PA

    // ===== 5. TEMPERATURE =====
    // Formula: ΔT = v² / (2 × cp)
    // This represents kinetic energy converted to heat
    // Reference: First Law of Thermodynamics
    // Note: In practical water systems, this rise is negligible (<0.001°C)
    const tempRise = Math.pow(velocity, 2) / (2 * cp)
    const finalTemp = waterTemp + tempRise

    // ===== SET RESULTS =====
    setResults({
      pressure: pressurePSI > 0 ? pressurePSI.toFixed(2) : null,
      temperature: finalTemp.toFixed(2),
      totalConsumption: totalConsumptionCm3 > 0 ? formatScientific(totalConsumptionCm3) : null,
      instantaneousFlowRate: flowRateCm3Hr > 0 ? formatScientific(flowRateCm3Hr) : null,
    })
  }

  // Format numbers in scientific notation
  const formatScientific = (num) => {
    if (num === 0 || isNaN(num) || !isFinite(num)) return '0'
    
    const absNum = Math.abs(num)
    if (absNum >= 10000 || absNum < 0.01) {
      const exponent = Math.floor(Math.log10(absNum))
      const mantissa = num / Math.pow(10, exponent)
      return `${mantissa.toFixed(2)} × 10^${exponent}`
    }
    
    return num.toFixed(2)
  }

  // Format for display with superscript
  const formatForDisplay = (value) => {
    if (!value || value === '--') return '--'
    if (value.includes('× 10^')) {
      const parts = value.split('× 10^')
      return `${parts[0]}× 10<sup>${parts[1]}</sup>`
    }
    return value
  }

  const reset = () => {
    setInputs({
      pipeDiameter: '',
      flowVelocity: '',
      timeDuration: '',
      initialPressure: '',
      waterTemp: '',
    })
    setResults({
      pressure: null,
      temperature: null,
      totalConsumption: null,
      instantaneousFlowRate: null,
    })
  }

  return (
    <>
      <style>{`
        /* ===== LIGHT MODE (DEFAULT) ===== */
        :root {
          --wc-accent: #7ACC15;
          --wc-accent-dark: #6AB510;
          --wc-accent-bg: rgba(122, 204, 21, 0.1);
          --wc-accent-bg-hover: rgba(122, 204, 21, 0.15);

          --wc-text-primary: #1e293b;
          --wc-text-secondary: #64748b;
          --wc-text-muted: #94a3b8;

          --wc-border: #e2e8f0;
          --wc-border-light: #f1f5f9;
          --wc-surface: #ffffff;
          --wc-surface-alt: #f8fafc;
          --wc-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          --wc-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);

          --wc-warning: #f59e0b;
          --wc-warning-bg: rgba(245, 158, 11, 0.08);
          --wc-warning-border: rgba(245, 158, 11, 0.25);

          --wc-input-bg: #ffffff;
          --wc-input-border: #d1d5db;
          --wc-input-focus: rgba(122, 204, 21, 0.2);
        }

        /* ===== DARK MODE ===== */
        .dark {
          --wc-accent: #9FFB1E;
          --wc-accent-dark: #8BE619;
          --wc-accent-bg: rgba(159, 251, 30, 0.12);
          --wc-accent-bg-hover: rgba(159, 251, 30, 0.18);

          --wc-text-primary: #f1f5f9;
          --wc-text-secondary: #94a3b8;
          --wc-text-muted: #64748b;

          --wc-border: rgba(255, 255, 255, 0.1);
          --wc-border-light: rgba(255, 255, 255, 0.05);
          --wc-surface: rgba(30, 30, 30, 0.95);
          --wc-surface-alt: rgba(40, 40, 40, 0.9);
          --wc-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          --wc-shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.3);

          --wc-warning: #fbbf24;
          --wc-warning-bg: rgba(251, 191, 36, 0.1);
          --wc-warning-border: rgba(251, 191, 36, 0.3);

          --wc-input-bg: rgba(255, 255, 255, 0.05);
          --wc-input-border: rgba(255, 255, 255, 0.15);
          --wc-input-focus: rgba(159, 251, 30, 0.25);
        }

        /* Auto-detection via prefers-color-scheme */
        @media (prefers-color-scheme: dark) {
          :root:not(.light) {
            --wc-accent: #9FFB1E;
            --wc-accent-dark: #8BE619;
            --wc-accent-bg: rgba(159, 251, 30, 0.12);
            --wc-accent-bg-hover: rgba(159, 251, 30, 0.18);

            --wc-text-primary: #f1f5f9;
            --wc-text-secondary: #94a3b8;
            --wc-text-muted: #64748b;

            --wc-border: rgba(255, 255, 255, 0.1);
            --wc-border-light: rgba(255, 255, 255, 0.05);
            --wc-surface: rgba(30, 30, 30, 0.95);
            --wc-surface-alt: rgba(40, 40, 40, 0.9);
            --wc-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
            --wc-shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.3);

            --wc-warning: #fbbf24;
            --wc-warning-bg: rgba(251, 191, 36, 0.1);
            --wc-warning-border: rgba(251, 191, 36, 0.3);

            --wc-input-bg: rgba(255, 255, 255, 0.05);
            --wc-input-border: rgba(255, 255, 255, 0.15);
            --wc-input-focus: rgba(159, 251, 30, 0.25);
          }
        }

        /* ===== MAIN WRAPPER ===== */
        .wc-wrapper {
          margin-bottom: 4rem;
        }

        .wc-container {
          background: var(--wc-surface);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: var(--wc-shadow);
          border: 1px solid var(--wc-border);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        /* ===== HEADER ===== */
        .wc-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 2px solid var(--wc-accent);
        }

        .wc-header-icon {
          width: 48px;
          height: 48px;
          background: var(--wc-accent-bg);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .wc-header-icon svg {
          width: 28px;
          height: 28px;
          stroke: var(--wc-accent);
        }

        .wc-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--wc-text-primary);
          margin: 0;
          letter-spacing: -0.02em;
        }

        /* ===== CONTENT LAYOUT ===== */
        .wc-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        /* ===== INPUT SECTION ===== */
        .wc-inputs {
          display: flex;
          flex-direction: column;
        }

        .wc-section-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--wc-text-primary);
          margin: 0 0 1.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .wc-section-title::before {
          content: '';
          width: 4px;
          height: 20px;
          background: var(--wc-accent);
          border-radius: 2px;
        }

        .wc-input-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .wc-input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .wc-input-group.full-width {
          grid-column: 1 / -1;
        }

        .wc-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--wc-text-primary);
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .wc-label-unit {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--wc-text-secondary);
        }

        .wc-input {
          padding: 0.875rem 1rem;
          border: 2px solid var(--wc-input-border);
          border-radius: 10px;
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--wc-text-primary);
          background: var(--wc-input-bg);
          transition: all 0.2s ease;
          width: 100%;
        }

        .wc-input:focus {
          outline: none;
          border-color: var(--wc-accent);
          box-shadow: 0 0 0 4px var(--wc-input-focus);
        }

        .wc-input::placeholder {
          color: var(--wc-text-muted);
          font-weight: 400;
        }

        /* ===== BUTTONS ===== */
        .wc-actions {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }

        .wc-btn {
          flex: 1;
          padding: 1rem 1.5rem;
          border-radius: 10px;
          font-size: 0.9375rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .wc-btn-primary {
          background: #9FFB1E;
          color: #000000;
        }

        .wc-btn-primary:hover {
          background: #8BE619;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(159, 251, 30, 0.4);
        }

        .wc-btn-secondary {
          background: var(--wc-surface-alt);
          color: var(--wc-text-primary);
          border: 2px solid var(--wc-border);
        }

        .wc-btn-secondary:hover {
          border-color: var(--wc-accent);
          background: var(--wc-accent-bg);
        }

        /* ===== RESULTS SECTION ===== */
        .wc-results {
          display: flex;
          flex-direction: column;
        }

        .wc-results-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          flex: 1;
        }

        .wc-result-card {
          background: var(--wc-surface-alt);
          border: 1px solid var(--wc-border);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          transition: all 0.2s ease;
        }

        .wc-result-card:hover {
          border-color: var(--wc-accent);
          transform: translateY(-2px);
          box-shadow: var(--wc-shadow-sm);
        }

        .wc-result-icon {
          width: 44px;
          height: 44px;
          background: var(--wc-accent-bg);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 1.5rem;
        }

        .wc-result-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          min-width: 0;
        }

        .wc-result-label {
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--wc-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .wc-result-value {
          font-size: 1.125rem;
          font-weight: 800;
          color: var(--wc-accent);
          font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
          word-break: break-word;
          line-height: 1.3;
        }

        .wc-result-value sup {
          font-size: 0.65em;
        }

        .wc-result-unit {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--wc-text-muted);
          margin-top: 0.125rem;
        }

        /* ===== DISCLAIMER ===== */
        .wc-disclaimer {
          margin-top: 2rem;
          padding: 1.25rem;
          background: var(--wc-warning-bg);
          border: 1px solid var(--wc-warning-border);
          border-radius: 10px;
          border-left: 4px solid var(--wc-warning);
        }

        .wc-disclaimer p {
          margin: 0;
          font-size: 0.875rem;
          color: var(--wc-text-primary);
          line-height: 1.7;
        }

        .wc-disclaimer strong {
          color: var(--wc-warning);
          font-weight: 700;
        }

        /* ===== FORMULAS INFO ===== */
        .wc-formulas {
          margin-top: 2rem;
          padding: 1.5rem;
          background: var(--wc-accent-bg);
          border: 1px solid var(--wc-border);
          border-radius: 12px;
        }

        .wc-formulas-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--wc-accent);
          margin: 0 0 1rem 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .wc-formulas-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .wc-formula-item {
          font-size: 0.8125rem;
          color: var(--wc-text-secondary);
          line-height: 1.5;
        }

        .wc-formula-item strong {
          color: var(--wc-text-primary);
          font-weight: 600;
        }

        .wc-formula-item code {
          background: var(--wc-surface);
          padding: 0.125rem 0.375rem;
          border-radius: 4px;
          font-family: 'SF Mono', 'Fira Code', monospace;
          font-size: 0.75rem;
          color: var(--wc-accent);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .wc-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .wc-container {
            padding: 1.5rem;
          }

          .wc-title {
            font-size: 1.375rem;
          }

          .wc-input-grid {
            grid-template-columns: 1fr;
          }

          .wc-results-grid {
            grid-template-columns: 1fr;
          }

          .wc-actions {
            flex-direction: column;
          }

          .wc-formulas-grid {
            grid-template-columns: 1fr;
          }

          .wc-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .wc-container {
            padding: 1.25rem;
            border-radius: 12px;
          }

          .wc-result-card {
            padding: 1rem;
          }

          .wc-result-value {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="wc-wrapper">
        <div className="wc-container">
          <div className="wc-header">
            <div className="wc-header-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <h2 className="wc-title">Water System Calculator</h2>
          </div>

          <div className="wc-content">
            <div className="wc-inputs">
              <h3 className="wc-section-title">Input Parameters</h3>
              
              <div className="wc-input-grid">
                <div className="wc-input-group">
                  <label className="wc-label" htmlFor="pipeDiameter">
                    Pipe Diameter <span className="wc-label-unit">(mm)</span>
                  </label>
                  <input
                    type="number"
                    id="pipeDiameter"
                    className="wc-input"
                    value={inputs.pipeDiameter}
                    onChange={(e) => handleInputChange('pipeDiameter', e.target.value)}
                    placeholder="e.g., 50"
                    step="0.1"
                    min="0"
                  />
                </div>

                <div className="wc-input-group">
                  <label className="wc-label" htmlFor="flowVelocity">
                    Flow Velocity <span className="wc-label-unit">(m/s)</span>
                  </label>
                  <input
                    type="number"
                    id="flowVelocity"
                    className="wc-input"
                    value={inputs.flowVelocity}
                    onChange={(e) => handleInputChange('flowVelocity', e.target.value)}
                    placeholder="e.g., 2.5"
                    step="0.1"
                    min="0"
                  />
                </div>

                <div className="wc-input-group">
                  <label className="wc-label" htmlFor="timeDuration">
                    Time Duration <span className="wc-label-unit">(min)</span>
                  </label>
                  <input
                    type="number"
                    id="timeDuration"
                    className="wc-input"
                    value={inputs.timeDuration}
                    onChange={(e) => handleInputChange('timeDuration', e.target.value)}
                    placeholder="e.g., 60"
                    step="1"
                    min="0"
                  />
                </div>

                <div className="wc-input-group">
                  <label className="wc-label" htmlFor="initialPressure">
                    Initial Pressure <span className="wc-label-unit">(PSI)</span>
                  </label>
                  <input
                    type="number"
                    id="initialPressure"
                    className="wc-input"
                    value={inputs.initialPressure}
                    onChange={(e) => handleInputChange('initialPressure', e.target.value)}
                    placeholder="e.g., 40"
                    step="0.1"
                    min="0"
                  />
                </div>

                <div className="wc-input-group full-width">
                  <label className="wc-label" htmlFor="waterTemp">
                    Water Temperature <span className="wc-label-unit">(°C)</span>
                  </label>
                  <input
                    type="number"
                    id="waterTemp"
                    className="wc-input"
                    value={inputs.waterTemp}
                    onChange={(e) => handleInputChange('waterTemp', e.target.value)}
                    placeholder="e.g., 20 (default)"
                    step="1"
                    min="0"
                    max="100"
                  />
                </div>
              </div>

              <div className="wc-actions">
                <button className="wc-btn wc-btn-primary" onClick={calculate}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Calculate
                </button>
                <button className="wc-btn wc-btn-secondary" onClick={reset}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                  Reset
                </button>
              </div>
            </div>

            <div className="wc-results">
              <h3 className="wc-section-title">Calculated Results</h3>
              
              <div className="wc-results-grid">
                <div className="wc-result-card">
                  <div className="wc-result-icon">⚡</div>
                  <div className="wc-result-content">
                    <div className="wc-result-label">Pressure</div>
                    <div className="wc-result-value">
                      {results.pressure !== null ? results.pressure : '--'}
                    </div>
                    <div className="wc-result-unit">PSI</div>
                  </div>
                </div>

                <div className="wc-result-card">
                  <div className="wc-result-icon">🌡️</div>
                  <div className="wc-result-content">
                    <div className="wc-result-label">Temperature</div>
                    <div className="wc-result-value">
                      {results.temperature !== null ? results.temperature : '--'}
                    </div>
                    <div className="wc-result-unit">°C</div>
                  </div>
                </div>

                <div className="wc-result-card">
                  <div className="wc-result-icon">📊</div>
                  <div className="wc-result-content">
                    <div className="wc-result-label">Total Consumption</div>
                    <div 
                      className="wc-result-value"
                      dangerouslySetInnerHTML={{ 
                        __html: results.totalConsumption !== null 
                          ? formatForDisplay(results.totalConsumption) 
                          : '--' 
                      }}
                    />
                    <div className="wc-result-unit">cm³</div>
                  </div>
                </div>

                <div className="wc-result-card">
                  <div className="wc-result-icon">💧</div>
                  <div className="wc-result-content">
                    <div className="wc-result-label">Flow Rate</div>
                    <div 
                      className="wc-result-value"
                      dangerouslySetInnerHTML={{ 
                        __html: results.instantaneousFlowRate !== null 
                          ? formatForDisplay(results.instantaneousFlowRate) 
                          : '--' 
                      }}
                    />
                    <div className="wc-result-unit">cm³/hr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="wc-formulas">
            <h4 className="wc-formulas-title">📐 Formulas Used</h4>
            <div className="wc-formulas-grid">
              <div className="wc-formula-item">
                <strong>Flow Rate:</strong><br />
                <code>Q = A × v</code> (Continuity Equation)
              </div>
              <div className="wc-formula-item">
                <strong>Area:</strong><br />
                <code>A = π × (d/2)²</code>
              </div>
              <div className="wc-formula-item">
                <strong>Pressure:</strong><br />
                <code>P = P₀ + ½ρv²</code> (Bernoulli)
              </div>
              <div className="wc-formula-item">
                <strong>Consumption:</strong><br />
                <code>V = Q × t</code>
              </div>
            </div>
          </div>

          <div className="wc-disclaimer">
            <p>
              <strong>⚠️ Disclaimer:</strong> These calculations are for reference purposes only. 
              Actual values may vary based on system conditions, pipe material, temperature variations, 
              friction losses, and other factors. Consult a qualified engineer for critical applications.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WaterCalculator