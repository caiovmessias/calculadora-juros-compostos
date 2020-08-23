import { formatNumber, formatMoney } from './formatacaoValores';

export function calculoJuros(capital, taxa, periodo) {
  const taxaPorcentagem = taxa / 100 + 1;
  const porcentagemPeriodo = Math.pow(taxaPorcentagem, periodo);

  const montante = capital * porcentagemPeriodo;
  const diferencaCapitalMontante = montante - capital;
  const porcentagemFinal = ((diferencaCapitalMontante * 100) / capital).toFixed(2);

  const resultados = {
    montante: formatMoney(montante),
    diferencaCapitalMontante:
      diferencaCapitalMontante > 0
        ? `+ ${formatMoney(diferencaCapitalMontante)}`
        : formatMoney(diferencaCapitalMontante),
    porcentagemFinal: `${formatNumber(porcentagemFinal)}%`,
  };

  return resultados;
}
