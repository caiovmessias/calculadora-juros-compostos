import React from 'react';
import css from './Installment.module.css';

export default function Installment({
  periodo,
  valorTotal,
  valorRendimento,
  percentualRendimento,
}) {
  let styles = {};

  if (valorRendimento.includes('+')) {
    styles = {
      installment: {
        borderBottom: '3px solid #00CA00',
      }
    };
  } else {
    styles = {
      installment: {
        borderBottom: '3px solid #CA0000',
      }
    };
  }

  return (
    <div className={css.installment} style={styles.installment}>
      <span className={css.id}>{periodo}</span>
      <div className={css.items}>
        <span style={{ fontWeight: 'bold' }}>{valorTotal}</span>
        <span style={{ fontWeight: 'bold' }}>{valorRendimento}</span>
        <span>{percentualRendimento}</span>
      </div>
    </div>
  );
}
