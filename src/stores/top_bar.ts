import type { IMenu, IUserSelections } from "src/models/menu";
import { writable } from "svelte/store";

// TODO: implement server fetching fort this
export const menuOpt = writable<IMenu>({
    categories: [
        {
            id: 1,
            name: "Companies",
            items: [
                {
                    name: "All",
                    id: -1,
                },
                {
                    name: "Coca-Cola",
                    id: 45,
                },
                {
                    name: "Pepsi",
                    id: 46,
                },
            ],
        },
        {
            id: 2,
            name: "Topics",
            items: [
                {
                    name: "All",
                    id: -1,
                },
                {
                    name: "Xbox",
                    id: 225,
                },
                {
                    name: "Nintendo",
                    id: 224,
                },
            ],
        },
        {
            id: 3,
            name: "Verticals",
            items: [
                {
                    name: "All",
                    id: -1,
                },
            ],
        },
        {
            id: 4,
            name: "Audiences",
            items: [
                {
                    name: "All",
                    id: -1,
                },
            ],
        },
        {
            id: 5,
            name: "Regions",
            items: [
                {
                    name: "All",
                    id: -1,
                },
            ],
        },
    ],
});

export const userSelections = writable<IUserSelections>({
    categoryItemIds: [-1, -1, -1, -1, -1],
    date: new Date().toISOString()
});