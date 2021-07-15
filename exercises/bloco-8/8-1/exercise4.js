const generateNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const dragonDamage = () => generateNumber(15, dragon.strength);

const warriorDamage = () => generateNumber(warrior.strength, warrior.strength * warrior.weaponDmg);

const mageDamage = () => {
    let damage = generateNumber(mage.intelligence, mage.intelligence * 2);
    if (mage.mana >= 15) return {damage, mana: -15};
    return {damage: 'Não possui mana suficiente'}
}

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const gameActions = {
    warriorTurn: (warriorDamage) => {
      const damage = warriorDamage();
      warrior.damage = damage;
      dragon.healthPoints -= damage;
    },
    mageTurn: (mageDamage) => {
      const damage = mageDamage();
      mage.damage = damage;
      dragon.healthPoints -= damage.damage;
    },
    dragonTurn: (dragonDamage) => {
      const damage = dragonDamage();
      warrior.healthPoints -= damage;
      mage.healthPoints -= damage;
      dragon.damage = damage;
      console.log(battleMembers)
    },
    turnResult: () => {battleMembers};
  };

  console.log(gameActions.dragonTurn(dragonDamage));