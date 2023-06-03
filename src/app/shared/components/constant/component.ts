export class ComponentConstant {
    static get listPagination(): number[]{
        return [10, 50, 100];
    }

    static maxSizes = 5;
    static activeStartPage = 0;
    static debounceTimeFilter = 500;
}