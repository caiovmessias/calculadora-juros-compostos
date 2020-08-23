import React from 'react';
import Installment from './Installment';

import { calculoJuros } from '../helpers/calculoJuros';

import css from './Installments.module.css';
export default function Installments({ capitalInicial, jurosMensal, periodo }) {
  
  const installment = [];
  if (capitalInicial > 0 && jurosMensal != 0 && periodo > 0) {
      for (let i = 1; i <= periodo; i++) {
        const {
          montante,
          diferencaCapitalMontante,
          porcentagemFinal,
        } = calculoJuros(capitalInicial, jurosMensal, i);
          installment.push(
          <Installment
            key={i}
            periodo={i}
            valorTotal={montante}
            valorRendimento={diferencaCapitalMontante}
            percentualRendimento={porcentagemFinal}
          />
          );
      }
    return <div className={css.flexRow}>{installment}</div>;
  }
  return (
    <div className="center">
      Preencha todos os campos para realizar o cálculo.
    </div>
  );
}
