import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

describe('Character', () => {
  it('should create a character with a first name, last name, and role', () => {
    const character = new Character('martins', 'uzoma', 'deep');
    expect(character.firstName).toBe('martins');
    expect(character.lastName).toBe('uzoma');
    expect(character.role).toBe('deep');
  });

  it('should allow you to increase the level', () => {
    const chatacter = new Character('martins', 'uzoma', 'deep');
    chatacter.levelUp();
    expect(chatacter.level).toBe(2);
  });

  it.todo('should update the last modified date when leveling up', () => {
    const character = new Character('martins', 'uzoma', 'deep');
    const initialDate = character.lastModified;
    character.levelUp();
    expect(character.lastModified).toBeGreaterThan(initialDate);
  });
});
