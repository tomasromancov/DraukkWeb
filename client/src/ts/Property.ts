export class Property {
  name!: string;
  address!: string;
  cost!: number;
  thumbnail?: string;
  images?: string[];

  // Constructor to initialize the fields
  constructor(
    name: string,
    address: string,
    cost: number,
    thumbnail?: string,
    images?: string[]
  ) {
    this.name = name;
    this.address = address;
    this.cost = cost;
    this.thumbnail = thumbnail;
    this.images = images;
  }
}
