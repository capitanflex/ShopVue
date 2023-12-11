export interface ISubCategory {
    [key: string]: {
        id: number,
        img: string;
        title: string;
        products: object [];
    }
}

export interface ICategory {
    title: string;
    id: number;
    items: ISubCategory;
}

export interface ICategories {
    [key: string]: ICategory;
}

export interface IProductParams {
    title: string;
    id: number;
    items: ISubCategory;
}

export interface IProducts {
    title: string;
    id: number;
    products: [];

}

export interface ICategoryProductParams {
    title: string;
    id: number;
    products: IProducts;
}
export interface ICategoryProduct {
    [key: string]: ICategoryProductParams;
}