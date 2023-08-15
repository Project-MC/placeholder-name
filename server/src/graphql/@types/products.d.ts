// TypeScript Declarations for Product Related Objects, Parameters, etc.

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
}
