import { DayXX } from './index';
import { PuzzleType } from '../Day';

describe('puzzle XX can be solved correctly', () => {
  const Day = new DayXX();
  it('the example text for part 1 passes', async () => {
    expect(await Day.solve1(PuzzleType.EXAMPLE)).toBe(1);
  });

  it('the live text for part 1 passes', async () => {
    expect(await Day.solve1(PuzzleType.LIVE)).toBe(1);
  });

  it('the example text for part 2 passes', async () => {
    expect(await Day.solve2(PuzzleType.EXAMPLE)).toBe(1);
  });

  it('the live text for part 2 passes', async () => {
    expect(await Day.solve2(PuzzleType.LIVE)).toBe(1);
  });
});