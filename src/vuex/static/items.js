// ITEMS
// ----------------------------------------------------------------------

// Damage:
// ( (Strength or Magic) + (Base power of weapon) ) - (Enemy Def or Magic Def)

// Evasion
// ( Speed - Weight of weapon - con ) * 2 + Luck

// Hit Rate
// ( (Skill * 2) + (Luck / 2) + Base accuracy of weapon ) - Enemy Evasion

// Critical Hit
// [ (Skill / 2) + (Base critical hit rate of weapon) ] - Enemy Luck

// If enemies weapon is weak against you
// + 15% accuracy
// + 1 damage

// If not
// - 15% accuracy
// - 1 damage

const items = {
  1: {
    id: 1,
    name: 'Iron Sword',
    usage: 46,
    power: 5,
    skill: 'E',
    range: 1,
    weight: 5,
    accuracy: 90,
    critical: 0,
    price: 460,
    bg: 'background-position: -1px -1px',
    type: 'Weapon'
  },
  200: {
    id: 200,
    name: 'Vulnerary',
    usage: 3,
    price: 300,
    type: 'Recovery',
    power: 10,
    effect: 'Heals 10 HP'
  }
};

export default items;
