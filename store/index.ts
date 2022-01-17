import Vue from 'vue';
// eslint-disable-next-line import/named
import Vuex, { StoreOptions, Store } from 'vuex';
import products from './products';
import { IRootState, ICurrentPage, IPreviousPage } from './types';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
    state: {
        version: '1.0.0',
        showSuccessSnackbar: false,
        showErrorSnackbar: false,
        snackbarErrorText: 'Something went wrong.',
        snackbarSuccessText: 'Success.',
        currentPage: { title: '', showBoxCoinBalance: false },
        previousPage: { path: '/', sameAsCurrent: true },
    },
    modules: {
        products,
    },
    mutations: {
        toggleSuccessSnackbar(rootState: IRootState, payload?: boolean) {
            rootState.showSuccessSnackbar =
                payload === undefined || payload === null
                    ? !rootState.showSuccessSnackbar
                    : payload;
        },
        toggleErrorSnackbar(rootState: IRootState, payload?: boolean) {
            rootState.showErrorSnackbar =
                payload === undefined || payload === null
                    ? !rootState.showErrorSnackbar
                    : payload;
        },
        updateSnackbarSuccessText(rootState: IRootState, payload: string) {
            rootState.snackbarSuccessText = payload;
        },
        updateSnackbarErrorText(rootState: IRootState, payload: string) {
            rootState.snackbarErrorText = payload;
        },
        updateCurrentPage(rootState: IRootState, payload: ICurrentPage) {
            rootState.currentPage = payload;
        },
        updatePreviousPage(rootState: IRootState, payload: IPreviousPage) {
            rootState.previousPage = payload;
        },
    },

}

export default (): Store<IRootState> => new Store<IRootState>(store);