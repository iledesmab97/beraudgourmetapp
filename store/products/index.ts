// eslint-disable-next-line import/named
import { Module } from 'vuex';
import { IRootState } from '../types';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IProductState } from './types';

export const state: () => IProductState = () => ({
    promotion: {
        product: {
            id: 1,
            name: 'Quiche',
            price: 205,
            description: '',
            category: require('../../assets/categories/tarte.svg'),
            ranking: 5,
            img: '/_nuxt/assets/Quiche.png'
        },
        type: 1,
        descuento: 10,
        title: 'Super Descuento',
        text: 'Disfruta de la promoción'
    },
    products: [
        {
            id: 1,
            name: 'Quiche',
            price: 205,
            description: 'Platillo francés',
            category: require('../../assets/categories/tarte.svg'),
            ranking: 5,
            personas: 4,
            img: '/_nuxt/assets/Quiche.png'

        },
        {
            id: 2,
            name: 'Pizza Keto',
            price: 110,
            description: 'Pizza vegana',
            category: require('../../assets/categories/pizza.svg'),
            ranking: 3,
            personas: 2,
            img: '/_nuxt/assets/Quiche.png'

        },
        {
            id: 3,
            name: 'helado',
            price: 25,
            description: '',
            category: require('../../assets/categories/dessert.svg'),
            ranking: 2,
            peso: 5,
            img: '/_nuxt/assets/Quiche.png'
        },
        {
            id: 3,
            name: 'Ensalada peruana',
            price: 25,
            description: '',
            category: require('../../assets/categories/salad.svg'),
            ranking: 2,
            peso: 5,
            img: '/_nuxt/assets/Quiche.png'
        },
        {
            id: 4,
            name: 'Hamburguesa',
            price: 25,
            description: '',
            category: require('../../assets/categories/burger.svg'),
            ranking: 2,
            peso: 5,
            img: '/_nuxt/assets/Quiche.png'
        },
    ],
});

const namespaced = true;

const products: Module<IProductState, IRootState> = {
    namespaced,
    state: state(),
    getters,
    actions,
    mutations,
};

export default products;
