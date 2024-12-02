import { Day02 } from './index';
import { PuzzleType } from '../Day';

describe('puzzle 02 can be solved correctly', () => {
  const Day = new Day02();
  it('the example text for part 1 passes', async () => {
    expect(await Day.solve1(PuzzleType.EXAMPLE)).toBe(2);
  });

  it('the live text for part 1 passes', async () => {
    expect(await Day.solve1(PuzzleType.LIVE)).toBe(213);
  });

  it('the example text for part 2 passes', async () => {
    expect(await Day.solve2(PuzzleType.EXAMPLE)).toBe(6);
  });

  it('the live text for part 2 passes', async () => {
    expect(await Day.solve2(PuzzleType.LIVE)).toBe(1000);
  });
});