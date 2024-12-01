import { Day } from '../Day';

export class Day01 extends Day {
  day = '01';

  private parseInput(input: string[]) {
    const left: number[] = [];
    const right: number[] = [];
    
    input
      .forEach((line) => {
        const [l, r] = line.split(/\s+/);
        left.push(parseInt(l, 10));
        right.push(parseInt(r, 10));
      });
  
    return {
      left, right,
    };
  }

  doPart1(input: string[]) {
    const data = this.parseInput(input);
    const left = data.left.sort();
    const right = data.right.sort();
    return left
      .reduce((acc, val, i) => acc + Math.abs(val - right[i]), 0);
  }

  doPart2(input: string[]) {
    const { left, right } = this.parseInput(input);

    return left
      .reduce((acc, val) => {
        const matches = right.filter((r) => r === val);
        return val * matches.length + acc;
      }, 0);
  }
}