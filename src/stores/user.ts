import { writable } from "svelte/store";

export const user = writable<IUser>(null);

export interface IUser {
    readonly username: string;
    readonly password: string;
}