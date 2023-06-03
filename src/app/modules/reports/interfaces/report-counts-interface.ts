import { cardTypeValue } from "src/app/shared/interfaces/components-interface";

export interface IReportCount {
    id: string;
    title: string;
    value: number;
    type: cardTypeValue
}