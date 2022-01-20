import { IProducts } from '../entities/products';
import { Resolver, Query } from "type-graphql";


@Resolver(IProducts)
export class HelloResolver {
    @Query(() => IProducts)
    hello() {
        return {
            id: '1',
            name: 'First Product'
        };
    }
}