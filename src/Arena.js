class Arena extends Fighter {
  constructor(size, monsters, hero, x, y) {
    super(x, y);
    this.monsters = monsters;
    this.hero = hero;
    this.size = size;
  }

  getDistance(A, B) {
    return Math.sqrt(Math.pow(B.x - A.x, 2) + Math.pow(B.y - A.y, 2)).toFixed(
      2
    );
  }

  isTouchable(attacker, defender) {
    if (attacker.getRange() >= this.getDistance(attacker, defender)) {
      return true;
    }
    return false;
  }
}
