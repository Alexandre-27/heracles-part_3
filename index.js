/** Part for the starting instanciation */
/** creating the hero Heracles */
const heracles = new Hero("👨 Heracles", 20, 6, "./images/heracles.svg", 3, 7);

/** Creating his weapon and associating it */
const weapon = new Weapon("sword", 10, "./images/sword.svg");
const flamethrower = new Weapon("Lance-flammes", 22);
const submachineGun = new Weapon("Mitraillette", 17);
const grenade = new Weapon("Grenade", 20);
const assaultRifle = new Weapon("Fusil d'Assaut", 19);
const gun = new Weapon("Pistolet", 12);
const rocketLauncher = new Weapon("Lance-roquette", 31);

heracles.weapon = weapon;

/** Creating his shield and associating it */
const shield = new Shield("shield", 10, "./images/shield.svg");
const ironArmor = new Shield("Armure de fer", 13);
const bulletproofVest = new Shield("Gilet par balle", 16);
const shieldHighMps = new Shield("Bouclier en polyéthylène à haut module", 17);
const exoskeletons = new Shield("Exosquelettes", 9);
const syntheticArmor = new Shield("Armure Synthétique", 30);
const PlasmaShield = new Shield("Bouclier à plasma", 25);

heracles.shield = shield;

/* Creating his vehicle and associating it */
const assaultTank = new Vehicle(
  "Char d'Assaut",
  46,
  70,
  "images/char-heracles.png"
);
const helicopter = new Vehicle(
  "Hélicoptère",
  38,
  52,
  "images/helico-heracles.png"
);
const boat = new Vehicle("Bateau", 37, 30);
const ArmoredCar = new Vehicle("Voiture blindé", 27, 34);
const fighterJet = new Vehicle("Avion de chasse", 55, 61);

heracles.vehicle = assaultTank;

/** Creating all of his adversaries */
const bird1 = new Monster("Bird", 25, 12, "./images/bird.svg", 2, 7);
const bird2 = new Monster("Bird", 25, 12, "./images/bird.svg", 3, 8);
const bird3 = new Monster("Bird", 25, 12, "./images/bird.svg", 4, 6);

bird1.vehicle = helicopter;
bird2.vehicle = helicopter;
bird3.vehicle = boat;

/** Creating the hero section in the html */
const fighterHtml = new FightersTemplate("fighters");
fighterHtml.createTemplate(heracles, bird1);

/** Your code goes here */
const arena = new Arena([bird1, bird2, bird3], heracles);
const ArenaHTML = new ArenaTemplate("arena");
ArenaHTML.createArena(arena);

/** Do not touch => allow the opening / closing of the hero information section */
let openingModal = true;
const openModal = () => {
  if (openingModal) {
    const heroInfo = new HeroInfoTemplate("heroInfo");
    heroInfo.createHeroInfoTemplate(heracles);
    document.getElementById("heroInfo").style.display = "flex";
    openingModal = false;
  }
};

const closeModal = () => {
  const heroInfo = document.getElementById("heroInfo");
  heroInfo.style.display = "none";
  heroInfo.innerHTML = "";
  openingModal = true;
};
