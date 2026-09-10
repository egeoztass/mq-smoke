export const greet = (name, word = "Hello") => {
  const trimmed = String(name ?? "").trim();
  if (!trimmed) throw new TypeError("name is required");
  return `${word}, ${trimmed}`;
};
