import React from 'react';
import styles from './BarChart.module.css';

type BarChartItemProps = {
  label: string;
  percentage: number; // 0-100
  displayValue: string; // e.g. "$12.3B"
};

const BarChartItem: React.FC<BarChartItemProps> = ({ label, percentage, displayValue }) => {
  return (
    <div className={styles['bar-container']}>
      {/* Display value above the bar */}
      <div
        style={{
          marginBottom: 6,
          fontWeight: 700,
          color: 'rgb(57, 22, 61)',
          fontSize: '1.08rem',
          letterSpacing: 0.5,
          textShadow: '0 1px 2px #000a',
          textAlign: 'center',
        }}
      >
        {displayValue}
      </div>
      <div className={styles.bar} style={{ position: 'relative' }}>
        <div
          className={styles.fill}
          style={{ height: `${Math.max(0, Math.min(percentage, 100))}%` }}
        />
        {/* Percentage inside the bar */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            transform: 'translateY(-50%)',
            textAlign: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: '1.05rem',
            textShadow: '0 1px 4px #000b',
            zIndex: 2,
            pointerEvents: 'none',
            padding: '0 2px',
            wordBreak: 'break-word',
          }}
        >
          {percentage.toFixed(2)}%
        </div>
      </div>
      <div className={styles['label-bottom']}>{label}</div>
    </div>
  );
};

export default BarChartItem;
