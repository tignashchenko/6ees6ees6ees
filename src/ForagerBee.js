class ForagerBee extends HoneyMakerBee {
  constructor(color, eat) {
    super(color, eat);
    this.age = 10
    this.job = 'find pollen'
    this.canFly = true
    this.treasureChest = []
  }
  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};
