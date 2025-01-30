class PropertyDetail {
  title!: string;
  value!: string;

  // Constructor to initialize the fields
  constructor(title: string, value: string) {
    this.title = title;
    this.value = value;
  }
}

export default PropertyDetail;
