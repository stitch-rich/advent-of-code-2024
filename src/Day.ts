import { readFile } from 'node:fs/promises';

export enum PuzzleType {
  EXAMPLE = 'example',
  LIVE = 'input',
}

export abstract class Day {
  abstract day: string

  abstract doPart1(data: string[]): number

  abstract doPart2(data: string[]): number

  private async readData(type: PuzzleType) {
    const raw = await readFile(`./src/${ this.day }/${ type }.txt`, {
      encoding: 'utf-8',
    });
    return raw.split('\n');
  }

  async solve1(type: PuzzleType) {
    return this.doPart1(await this.readData(type));
  }

  async solve2(type: PuzzleType) {
    return this.doPart2(await this.readData(type));
  }
}