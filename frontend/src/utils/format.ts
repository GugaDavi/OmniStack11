const { format } = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

export default format;
