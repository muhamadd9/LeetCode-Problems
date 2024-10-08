function isHappy(n: number): boolean {
  let seen: Set<number> = new Set(); 

  while (n !== 1 && !seen.has(n)) {
    seen.add(n); 
    n = n
      .toString()
      .split("")
      .map((item) => Number(item) ** 2) 
      .reduce((acc, next) => acc + next, 0);
  }

  return n === 1; 
}
