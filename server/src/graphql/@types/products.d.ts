export interface Product {
  title: string;
  handle: string;
  description: string;
  isAvailable: boolean;
  featuredImage: string;
  images: string[];
  price: number;
  category: string;
  tags: string[];
  inventoryCount: number;
  addedAt: string;
  updatedAt: string;
  nextShipment: string;
}

export interface NewProductParams {
  title: string;
  handle: string;
  description: string;
  isAvailable: boolean;
  featuredImage: string;
  images: string[];
  price: number;
  category: string;
  tags: string[];
  inventoryCount: number;
  nextShipment: string;
}
