
export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    ranking: number;
    img?: string;
    personas?: number;
    peso?: number;
}

export interface IProductPromotion {
    product: IProduct;
    type: number;
    descuento?: number;
    title: string;
    text: string;
}

export interface IProductState {
    promotion: IProductPromotion;
    products: IProduct[];
}