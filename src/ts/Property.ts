export class Property {
  name!: string;
  address!: string;
  cost!: number;
  thumbnail?: string;

  // Constructor to initialize the fields
  constructor(name: string, address: string, cost: number, thumbnail?: string) {
    this.name = name;
    this.address = address;
    this.cost = cost;
    this.thumbnail = thumbnail;
  }
}
