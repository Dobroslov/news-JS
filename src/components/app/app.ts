import { IDataResponseNews, IDataResponseSources, TempElemNull } from '../../types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourcesElement: TempElemNull = document.querySelector('.sources');
        if (sourcesElement) {
            sourcesElement.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data): void => this.view.drawNews(<IDataResponseNews>data))
            );
        }

        this.controller.getSources((data): void => this.view.drawSources(<IDataResponseSources>data));
    }
}

export default App;
