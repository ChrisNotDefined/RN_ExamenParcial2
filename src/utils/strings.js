export const toMoney = (value) => {
  if (!value) return "";

  return `$${value.toFixed(2)} pesos`;
};
