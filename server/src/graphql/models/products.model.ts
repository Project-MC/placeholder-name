import { NewProductParams } from '../@types/products';

// Product Class for quickly constructing new products later on
class Product {
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

  constructor(
    title: string,
    handle: string,
    description: string,
    isAvailable: boolean,
    featuredImage: string,
    images: string[],
    price: number,
    category: string,
    tags: string[],
    inventoryCount: number
  ) {
    const date = new Date();
    const nextShipmentDate = new Date(date.getMilliseconds() + 1209600000);

    this.title = title;
    this.handle = handle;
    this.description = description;
    this.isAvailable = isAvailable;
    this.featuredImage = featuredImage;
    this.images = images;
    this.price = price;
    this.category = category;
    this.tags = tags;
    this.inventoryCount = inventoryCount;
    this.addedAt = date.toUTCString();
    this.updatedAt = date.toUTCString();
    this.nextShipment = nextShipmentDate.toUTCString();
  }
}

// In-Memory Products For PostMan/GraphiQL Tests  (Removed when database is set up)
const products: Product[] = [
  new Product(
    'Cool Rug',
    'cool-rug',
    'Wow, what a cool rug this is.',
    true,
    'https://image.testimage.webp',
    [
      'https://image.testimage.webp',
      'https://image2.testimage.webp',
      'https://image3.testimage.webp'
    ],
    49.99,
    'Rugs',
    ['rugs', 'decor', 'home'],
    40
  ),
  new Product(
    'Cooler Rug',
    'cooler-rug',
    'Wow, what an even cooler rug this is.',
    true,
    'https://image.testimage.webp',
    [
      'https://image.testimage.webp',
      'https://image2.testimage.webp',
      'https://image3.testimage.webp'
    ],
    59.99,
    'Rugs',
    ['rugs', 'decor', 'home'],
    20
  )
];

// 'Add New Product' method for the Products Model
const addNewProduct = ({
  title,
  handle,
  description,
  isAvailable,
  featuredImage,
  images,
  price,
  category,
  tags,
  inventoryCount
}: NewProductParams) => {
  const product = new Product(
    title,
    handle,
    description,
    isAvailable,
    featuredImage,
    images,
    price,
    category,
    tags,
    inventoryCount
  );
  products.push(product);
  return product;
};

// 'Products Model' that will contain all product related methods, CRUD operations
const ProductsModel = {
  getAllProducts: () => products,
  addNewProduct
};

export default ProductsModel;
