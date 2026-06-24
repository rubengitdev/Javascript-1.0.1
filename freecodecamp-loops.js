function isObject(val) {
  return val !== null && (typeof val === "object" || typeof val === "function");
}
console.log(isObject({ banana: "cherry" }));
