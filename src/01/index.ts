function parseInput(input: string) {
  const left: number[] = [];
  const right: number[] = [];
  
  input
    .split('\n')
    .forEach((line) => {
      const [l, r] = line.split(/\s+/);
      left.push(parseInt(l, 10));
      right.push(parseInt(r, 10));
    });

  return {
    left, right,
  };
}

export const solve1 = async (input: string): Promise<number> => {
  const data = parseInput(input);
  const left = data.left.sort();
  const right = data.right.sort();
  return left
    .reduce((acc, val, i) => acc + Math.abs(val - right[i]), 0);
};

export const solve2 = async (input: string): Promise<number> => {
  const { left, right } = parseInput(input);

  return left
    .reduce((acc, val) => {
      const matches = right.filter((r) => r === val);
      return val * matches.length + acc;
    }, 0);
};