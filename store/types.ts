export interface ICurrentPage {
    title: string;
    showBoxCoinBalance?: boolean;
    backIcon?: string;
    backRoute?: string;
    forceBackRoute?: boolean;
}
export interface IPreviousPage {
    path: string;
    sameAsCurrent: boolean;
}

export interface IRootState {
    version: string;
    showSuccessSnackbar: boolean;
    showErrorSnackbar: boolean;
    snackbarErrorText: string;
    snackbarSuccessText: string;
    currentPage: ICurrentPage;
    previousPage: IPreviousPage;
}

export interface ISortOption {
    title: string;
    property: string;
    direction: number;
}