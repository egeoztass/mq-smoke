export const greet = (name) => {
  const trimmed = String(name ?? "").trim();
  if (!trimmed) throw new TypeError("name is required");
  return `Hello, ${trimmed}`;
};
