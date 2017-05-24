class RetiredForagerBee extends ForagerBee {
  constructor(food, eat, treasureChest) {
    super(food, eat, treasureChest);
    this.age = 40
    this.job = 'gamble'
    this.canFly = false
    this.color = 'grey'
  }
  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
};
