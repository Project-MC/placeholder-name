import productsModel from '../models/products.model.js';
// Products Resolver Object containing all Query (read) and
// Mutation (write) methods
const productsResolver = {
    Query: {
        products: () => {
            return productsModel.getAllProducts();
        }
    },
    Mutation: {
        addNewProduct: (_parent, args) => {
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
                inventoryCount: args.inventoryCount
            });
        }
    }
};
export default productsResolver;
