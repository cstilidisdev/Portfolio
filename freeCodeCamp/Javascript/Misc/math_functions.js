export default function add(a, b) {
  return a + b;
}

export const substract = (a, b) => {
  if (a > b) {
    return a - b;
  }
  return b - a;
};
