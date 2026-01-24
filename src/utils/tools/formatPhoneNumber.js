function formatPhoneNumber(value) {
  // Supprime tout sauf les chiffres
  const digits = value.replace(/\D/g, "").slice(0, 10); // max 10 chiffres

  const part1 = digits.slice(0, 3);
  const part2 = digits.slice(3, 6);
  const part3 = digits.slice(6, 10);

  let formatted = "";
  if (part1) formatted += `(${part1}`;
  if (part1 && part1.length === 3) formatted += ") ";
  if (part2) formatted += part2;
  if (part2 && part2.length === 3 && part3) formatted += "-";
  if (part3) formatted += part3;

  return formatted;
}
export { formatPhoneNumber };