export class Realtor {
  name!: string;
  email!: string;
  phoneNumber!: string;
  profileImage?: string;

  // Constructor to initialize the fields
  constructor(
    name: string,
    email: string,
    phoneNumber: string,
    profileImage?: string
  ) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.profileImage = profileImage;
  }
}
