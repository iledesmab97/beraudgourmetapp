// eslint-disable-next-line import/named
import { ActionTree } from 'vuex';
import { IRootState } from '../types';
import { IProductState } from './types';
import hello from '@/graphql-client/querys/hello.gql'


export const actions: ActionTree<IProductState, IRootState> = {

    // async hello({ commit }: any) {
    //     try {
    //         const client = (this as any).app.apolloProvider.defaultClient;
    //         const { data } = await client.query({
    //             query: hello,
    //         });
    //         console.log(data)
    //     } catch (error: any) {
    //         console.log(error)
    //     }
    // },
}