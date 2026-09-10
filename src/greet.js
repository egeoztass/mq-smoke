export const greet = (name) => {
  const trimmed = String(name ?? "").trim();
  if (!trimmed) throw new TypeError("name is required");
  const capitalised = trimmed[0].toUpperCase() + trimmed.slice(1);
  return `Hello, ${capitalised}`;
};
