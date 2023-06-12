import { IDataResponseNews, IDataResponseSources } from '../../types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: IDataResponseNews): void {
        console.log('file: appView.ts:15 ~ AppView ~ drawNews ~ data:', data);
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: IDataResponseSources): void {
        console.log('file: appView.ts:21 ~ AppView ~ drawSources ~ data:', data);
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
