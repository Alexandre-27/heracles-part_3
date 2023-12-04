class Hero extends Fighter {
  constructor(name, strength, dexterity, image, x, y, vehicle) {
    super(name, strength, dexterity, image, x, y, vehicle);
    this.weapon = null;
    this.shield = null;
  }

  getDamage() {
    if (this.vehicle && this.weapon) {
      return this.vehicle.damage + this.weapon.damage + this.strength;
    } else if (this.vehicle) {
      return this.vehicle.damage + this.strength;
    } else if (this.weapon) {
      return this.weapon.damage + this.strength;
    }
    return this.strength;
  }

  getDefense() {
    if (this.vehicle && this.shield) {
      return this.vehicle.shielding + this.shield.protection + this.dexterity;
    } else if (this.vehicle) {
      return this.vehicle.shielding + this.dexterity;
    } else if (this.shield) {
      return this.shield.protection + this.dexterity;
    }
    return this.dexterity;
  }
}
