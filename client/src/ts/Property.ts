export class Property {
  //card variables
  name!: string;
  address!: string;
  cost!: number;
  thumbnail?: string;

  //expanded view variables
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

  public getCost(): string {
    return this.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " Kč";
  }
}
