const map = new WeakMap();
let ref = 0;
const getReference = (obj) => {
  if (!map.has(obj))
    map.set(obj, ++ref);
  return map.get(obj);
};
export const show = (val) => {
  if (typeof val === "string")
    return JSON.stringify(val);
  if (typeof val === "function")
    return `&${getReference(val)}:${val.name}`;
  if (typeof val === "object" && val !== null)
    return `&${getReference(val)}`;
  return String(val);
};