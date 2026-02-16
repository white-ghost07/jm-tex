import { StaticImageData } from "next/image";

// Represents the Hero section at the top of the product category
export interface HeroSection {
  title: string;
  description: string;
  image: string | StaticImageData;
}

// Represents an individual bullet point in the details section
export interface DetailBullet {
  heading: string;
  text: string;
}

export interface CategoryDetails {
  title: string;
  intro: string;
  bullets: DetailBullet[];
  image1: {
    src: string | StaticImageData;
    name: string;
  };
  image2: {
    src: string | StaticImageData;
    name: string;
  };
}

// Represents the individual product items in the grid
export interface ProductItem {
  id: string | number;
  title: string;
  description: string;
  image: string | StaticImageData;
}

// The main Product Category interface
export interface ProductType {
  id: number;
  hero: HeroSection;
  details: CategoryDetails;
  products: ProductItem[];
}
