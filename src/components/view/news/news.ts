import { IDataNews, ElemNull, TempElemNull } from '../../../types';
import './news.css';

class News {
    draw(data: IDataNews[]): void {
        const news: IDataNews[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: TempElemNull = document.querySelector('#newsItemTemp');
        if (newsItemTemp) {
            news.forEach((item, idx) => {
                const newsClone: Node | DocumentFragment = newsItemTemp.content.cloneNode(true);
                if (newsClone instanceof DocumentFragment) {
                    if (idx % 2) {
                        const newsItem: ElemNull = newsClone.querySelector('.news__item');
                        if (newsItem) {
                            newsItem.classList.add('alt');
                        }
                    }

                    const newsMetaPhoto: TempElemNull = newsClone.querySelector('.news__meta-photo');
                    if (newsMetaPhoto) {
                        newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                    }

                    const newsMetaAuthor: TempElemNull = newsClone.querySelector('.news__meta-author');
                    if (newsMetaAuthor) {
                        newsMetaAuthor.textContent = item.author || item.source.name;
                    }

                    const newsMetaData: TempElemNull = newsClone.querySelector('.news__meta-date');
                    if (newsMetaData) {
                        newsMetaData.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                    }

                    const newsDescriptionTitle: TempElemNull = newsClone.querySelector('.news__description-title');
                    if (newsDescriptionTitle) {
                        newsDescriptionTitle.textContent = item.title;
                    }

                    const newsDescriptionSource: TempElemNull = newsClone.querySelector('.news__description-source');
                    if (newsDescriptionSource) {
                        newsDescriptionSource.textContent = item.source.name;
                    }

                    const newsDescriptionContent: TempElemNull = newsClone.querySelector('.news__description-content');
                    if (newsDescriptionContent) {
                        newsDescriptionContent.textContent = item.description;
                    }

                    const newsReadMoreLink: HTMLAnchorElement | null = newsClone.querySelector('.news__read-more a');
                    if (newsReadMoreLink) {
                        newsReadMoreLink.setAttribute('href', item.url);
                    }

                    fragment.append(newsClone);
                }
            });

            const newsContainer: ElemNull = document.querySelector('.news');
            if (newsContainer) {
                newsContainer.innerHTML = '';
                newsContainer.appendChild(fragment);
            }
        }
    }
}

export default News;
