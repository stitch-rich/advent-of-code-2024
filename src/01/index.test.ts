import { Day01 } from './index';
import { PuzzleType } from '../Day';

describe('puzzle 01 can be solved correctly', () => {
  const Day = new Day01();
  it('the example text for part 1 passes', async () => {
    expect(await Day.solve1(PuzzleType.EXAMPLE)).toBe(11);
  });

  it('the live text for part 1 passes', async () => {
    expect(await Day.solve1(PuzzleType.LIVE)).toBe(1258579);
  });

  it('the example text for part 2 passes', async () => {
    expect(await Day.solve2(PuzzleType.EXAMPLE)).toBe(31);
  });

  it('the live text for part 2 passes', async () => {
    expect(await Day.solve2(PuzzleType.LIVE)).toBe(23981443);
  });
});