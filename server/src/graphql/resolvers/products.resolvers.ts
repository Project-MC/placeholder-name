import productsModel from '../models/products.model.js';

const productsResolver = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    }
  },
  Mutation: {
    addNewProduct: (_parent: any, args: any) => {
      return productsModel.addNewProduct({
        title: args.title,
        handle: args.handle,
        description: args.description,
        isAvailable: args.isAvailable,
        featuredImage: args.featuredImage,
        images: args.images,
        price: args.price,
        category: args.category,
        tags: args.tags,
        inventoryCount: args.inventoryCount,
        nextShipment: args.nextShipment
      });
    }
  }
};

export default productsResolver;
