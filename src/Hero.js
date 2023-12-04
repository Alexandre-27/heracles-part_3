class Hero extends Fighter {
  constructor(name, strength, dexterity, image, x, y) {
    super(name, strength, dexterity, image, x, y);
  }

  getDamage() {
    return this.weapon ? this.strength + this.weapon.damage : this.strength;
  }

  getRange() {
    return this.weapon ? this.range + this.weapon.range : this.range;
  }

  getDefense() {
    return this.shield
      ? this.dexterity + this.shield.protection
      : this.dexterity;
  }
}
