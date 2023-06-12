import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '66ac5df8ae8e4e2cbb8fa4670890357d',
        });
    }
}

export default AppLoader;
