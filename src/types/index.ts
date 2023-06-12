export interface DataSources {
    id: string;
    name: string;
    // description: string;
    // url: string;
    // category: string;
    // language: string;
    // country: string;
}

export interface SorcesNews {
    status: string;
    sources: Array<DataSources>;
}
export interface DataNews {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: DataSources;
    id: string;
    name: string;
    title: string;
    url: string;
    urlToImage: string;
}

export type ElemNull = Element | null;
export type TempElemNull = HTMLTemplateElement | null;
