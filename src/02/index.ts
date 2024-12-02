import { Day } from '../Day';

export class Day02 extends Day {
  day = '02';

  private parseInput(input: string[]): number[][] {
    return input.map(r => r.split(/\s+/)
      .map(l => parseInt(l, 10)));
  }

  private checkSafe(row: number[]): boolean {
    let isSafe = true;
    row.reduce((acc, val, i) => {
      if (i === 0) {
        return {
          direction: 'START',
          previous: val,
        };
      }

      try {
        // Early exit condition
        if (!isSafe) throw new Error('NOT SAFE');

        // Check if we are increasing or decreasing
        const delta = val - acc.previous;
        if (delta === 0) throw new Error('NOT INCREASING OR DECREASING');
        if (Math.abs(delta) > 3) throw new Error('DELTA TOO HIGH');
        let direction;
        if (delta > 0) {
          direction = 'INCREASING';
        } else {
          direction = 'DECREASING';
        }

        if (acc.direction !== 'START' && direction !== acc.direction) {
          throw new Error('DIRECTION CHANGED');
        }
        return {
          direction,
          previous: val,
        };
      } catch {
        isSafe = false;
        return {
          direction: 'END',
          previous: 0,
        };
      }
    }, {
      direction: 'START',
      previous: 0,
    });

    return isSafe;
  }

  doPart1(input: string[]) {
    const data = this.parseInput(input);
    const safe = data.filter(d => this.checkSafe(d));
    return safe.length;
  }

  doPart2(input: string[]) {
    return input.length;
  }
}