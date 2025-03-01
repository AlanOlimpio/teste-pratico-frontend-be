export const dateFormatter = new Intl.DateTimeFormat("pt-BR");

export const phoneFormatter = (value: string) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d{2})/, "+$1 ($2) ");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};
