import { IDataResponseNews, IDataResponseSources } from '../../types';
import AppLoader from './appLoader';

type ResponseCallback<T> = (data?: T) => void;
class AppController extends AppLoader {
    getSources(callback: ResponseCallback<IDataResponseSources>) {
        super.getResp(
            {
                endpoint: 'sources',
                options: {},
            },
            callback
        );
    }

    getNews(e: Event, callback: ResponseCallback<IDataResponseNews>) {
        let target: Node | HTMLElement = <HTMLElement>e.target;
        const newsContainer: HTMLElement = <HTMLElement>e.currentTarget;
        if (target && newsContainer) {
            while (target !== newsContainer) {
                if (target instanceof HTMLElement && target.classList.contains('source__item')) {
                    const sourceId: string | null = target.getAttribute('data-source-id');
                    if (sourceId) {
                        if (
                            newsContainer instanceof HTMLElement &&
                            newsContainer.getAttribute('data-source') !== sourceId
                        ) {
                            newsContainer.setAttribute('data-source', sourceId);
                            super.getResp(
                                {
                                    endpoint: 'everything',
                                    options: {
                                        sources: sourceId,
                                    },
                                },
                                callback
                            );
                        }
                    }

                    return;
                }
                if (target instanceof Node && target.parentNode) {
                    target = target.parentNode;
                }
            }
        }
    }
}

export default AppController;
