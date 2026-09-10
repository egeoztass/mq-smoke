const clean = (name) => {
  const trimmed = String(name ?? "").trim();
  if (!trimmed) throw new TypeError("name is required");
  return trimmed[0].toUpperCase() + trimmed.slice(1);
};

export const greet = (name) => {
  const names = (Array.isArray(name) ? name : [name]).map(clean);
  if (!names.length) throw new TypeError("name is required");
  const last = names.pop();
  const list = names.length ? `${names.join(", ")} and ${last}` : last;
  return `Hello, ${list}`;
};
