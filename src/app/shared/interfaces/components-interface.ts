import { ICurrency } from "./general-interface";

export type cardType = 'default' | 'title-value';
export type cardTypeValue = 'general' | 'currency' | 'percent';

export interface ICardTitleValue {
    title: string;
    value: number;
    type: cardTypeValue;
    currency?: ICurrency
}

export interface ITabs {
    id: string;
    title: string;
    active: boolean
}

export interface IPagination {
    pageNumber: number;
    pageSize: number;
}

export interface IFilterTable {
    searchValue: string;
    searchBy: string;
}