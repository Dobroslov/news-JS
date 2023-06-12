export interface Options {
    [key: string]: string;
}
export interface IDataSources {
    id: string;
    name: string;
}

export interface IDataResponseNews {
    status: string;
    totalResults: number;
    articles: IDataNews[];
}

export interface IDataResponseSources {
    status: string;
    totalResults: number;
    sources: IDataSources[];
}

export interface IDataNews {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: IDataSources;
    id: string;
    name: string;
    title: string;
    url: string;
    urlToImage: string;
}

export type ElemNull = Element | null;

export type TempElemNull = HTMLTemplateElement | null;

export type HTMLElemNull = HTMLElement | null;
