import { Context } from "../types"

class ProductsResolver {

    // eslint-disable-next-line require-await
    getProducts = async (_parent: any, _args: {}, _ctx: Context) => {
        return 'id';
    }
}

const productsResolvers = new ProductsResolver();

export default {
    Query: {
        getProducts: productsResolvers.getProducts,
    }
    // Mutations: {

    // }
}