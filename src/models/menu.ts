export interface IMenu {
    readonly categories: Array<ICategory>;
}

export interface ICategory {
    readonly id: number;
    readonly name: string;
    readonly items: Array<ICategoryItem>;
}

export interface ICategoryItem {
    readonly name: string;
    readonly id: number;
}

export interface IUserSelections {
    readonly categoryItemIds: Array<number>;
    readonly date: string;
}
