const products = [
    {
        title: 'Cool Rug',
        handle: 'cool-rug',
        description: 'Wow, what a cool rug this is.',
        isAvailable: true,
        featuredImage: 'https://image.testimage.webp',
        images: [
            'https://image.testimage.webp',
            'https://image2.testimage.webp',
            'https://image3.testimage.webp'
        ],
        price: 49.99,
        category: 'Rugs',
        tags: ['rugs', 'decor', 'home'],
        inventoryCount: 40,
        addedAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString(),
        nextShipment: new Date(new Date().getMilliseconds() + 604800000).toUTCString()
    },
    {
        title: 'Cooler Rug',
        handle: 'cooler-rug',
        description: 'Wow, what an even cooler rug this is.',
        isAvailable: true,
        featuredImage: 'https://image.testimage.webp',
        images: [
            'https://image.testimage.webp',
            'https://image2.testimage.webp',
            'https://image3.testimage.webp'
        ],
        price: 59.99,
        category: 'Rugs',
        tags: ['rugs', 'decor', 'home'],
        inventoryCount: 20,
        addedAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString(),
        nextShipment: new Date(new Date().getMilliseconds() + 1209600000).toUTCString()
    }
];
const addNewProduct = ({ title, handle, description, isAvailable, featuredImage, images, price, category, tags, inventoryCount, nextShipment }) => {
    const product = {
        title,
        handle,
        description,
        isAvailable,
        featuredImage,
        images,
        price,
        category,
        tags,
        inventoryCount,
        addedAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString(),
        nextShipment
    };
    products.push(product);
    return product;
};
const productsModel = {
    products,
    getAllProducts: () => products,
    addNewProduct
};
export default productsModel;
