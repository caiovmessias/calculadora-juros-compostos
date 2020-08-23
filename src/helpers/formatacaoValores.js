const formatter = Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 });

function formatNumber(value) {
  return formatter.format(value);
}

function formatMoney(value) {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

export { formatNumber, formatMoney };