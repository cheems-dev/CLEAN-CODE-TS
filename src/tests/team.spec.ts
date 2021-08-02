import { Team } from '../models/team.model';

describe('Team class', () => {
  it('Position ', () => {
    const team = new Team();
    const position = {
      name: 'goalkeeper',
      tShirt: 1,
      skills: ['kick hard', 'Run fast'],
    };

    expect(team.position(position.name, position.tShirt, position.skills)).toEqual([
      'goalkeeper',
      1,
      ['kick hard', 'Run fast'],
    ]);
  });

  it('Soccer Play', () => {
    const soccerPlay = new Team();
    expect(soccerPlay.attack()).toBe('dylantero');
  });
});
