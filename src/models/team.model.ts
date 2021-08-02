import { ISoccerPlay } from '../interfaces/ISoccerPlay';
import { ITeam } from '../interfaces/ITeam';

export class Team implements ITeam, ISoccerPlay {
  position(name: string, tShirt: number, skills: Array<string>): Array<any> {
    return [name, tShirt, skills];
  }

  attack(name: string = 'dylantero'): string {
    return name;
  }
}
