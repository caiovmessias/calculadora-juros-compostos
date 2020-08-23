import React, { useState, useEffect } from 'react';
import { FaCalendar, FaDollarSign, FaPercentage } from 'react-icons/fa';

import Installments from './Installments';

export default function Form() {
  const [capitalInicial, setCapitalInicial] = useState(0);
  const [jurosMensal, setJurosMensal] = useState(0);
  const [periodo, setPeriodo] = useState(0);

  const atualizaCapitalInicial = (event) => {
    setCapitalInicial(event.target.value);
  };

  const atualizaJurosMensal = (event) => {
    setJurosMensal(event.target.value);
  };

  const atualizaPeriodo = (event) => {
    setPeriodo(event.target.value);
  };

  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s4">
              <FaDollarSign className="material-icons prefix" />
              <input
                id="capital"
                type="number"
                className="validate"
                defaultValue={capitalInicial}
                onChange={atualizaCapitalInicial}
                autoFocus
                min="0"
                max="100000"
                step="100"
              />
              <label htmlFor="capital" className="active">
                Capital Inicial:
              </label>
            </div>
            <div className="input-field col s4">
              <FaPercentage className="material-icons prefix" />
              <input
                id="taxa"
                type="number"
                className="validate"
                defaultValue={jurosMensal}
                onChange={atualizaJurosMensal}
                min="-12"
                max="12"
                step="0.1"
              />
              <label htmlFor="taxa" className="active">
                Taxa de Juros Mensal:
              </label>
            </div>
            <div className="input-field col s4">
              <FaCalendar className="material-icons prefix" />
              <input
                id="periodo"
                type="number"
                className="validate"
                defaultValue={periodo}
                onChange={atualizaPeriodo}
                min="1"
                max="36"
              />
              <label htmlFor="periodo" className="active">
                Período:
              </label>
            </div>
          </div>
        </form>
      </div>
      <Installments
        capitalInicial={capitalInicial}
        jurosMensal={jurosMensal}
        periodo={periodo}
      />
    </div>
  );
}
