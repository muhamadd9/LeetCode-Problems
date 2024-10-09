function minAddToMakeValid(s: string): number {
  let open: number = 0;
  let close: number = 0;

  for (let char of s) {
    if (char === '(') {
      open++;
    } else if (char === ')') {
      open > 0 ? open-- : close++;
    }
  }
  return open + close;
}
