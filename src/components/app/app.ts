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
                this.controller.getNews(e, (data: IDataResponseNews) => this.view.drawNews(data))
            );
        }

        this.controller.getSources((data: IDataResponseSources) => this.view.drawSources(data));
    }
}

export default App;
