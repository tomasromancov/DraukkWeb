import { Property } from "../ts/Property";

const json = "https://storage.googleapis.com/draukk/Data/Properties.json";

const convertedProperties = fetch(json)
  .then((response: Response) => response.json())
  .then((properties: any[]) => {
    const convertedProperties: Property[] = properties.map(
      (rawProp: {
        name: string;
        address: string;
        cost: number;
        thumbnail: string | undefined;
        images: string[] | undefined;
      }) =>
        new Property(
          rawProp.name,
          rawProp.address,
          rawProp.cost,
          rawProp.thumbnail,
          rawProp.images
        )
    );
    return convertedProperties;
  })
  .catch((error) => {
    console.error("Error fetching or processing properties:", error);
  });

export default convertedProperties;
