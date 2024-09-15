export class Property {
  name!: string;
  address!: string;
  cost!: number;

  // Constructor to initialize the fields
  constructor(name: string, address: string, cost: number) {
    this.name = name;
    this.address = address;
    this.cost = cost;
  }
}
