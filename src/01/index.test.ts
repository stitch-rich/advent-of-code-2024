import { readFile } from 'node:fs/promises';

import { solve1, solve2 } from './index';

describe('puzzle 01 can be solved correctly', () => {
  it('the example text for part 1 passes', async () => {
    const input = await readFile('./src/01/example.txt', {
      encoding: 'utf-8',
    });
    expect(await solve1(input)).toBe(11);
  });

  it('the live text for part 1 passes', async () => {
    const input = await readFile('./src/01/input.txt', {
      encoding: 'utf-8',
    });
    expect(await solve1(input)).toBe(1258579);
  });

  it('the example text for part 2 passes', async () => {
    const input = await readFile('./src/01/example.txt', {
      encoding: 'utf-8',
    });
    expect(await solve2(input)).toBe(31);
  });

  it('the live text for part 2 passes', async () => {
    const input = await readFile('./src/01/input.txt', {
      encoding: 'utf-8',
    });
    expect(await solve2(input)).toBe(23981443);
  });
});