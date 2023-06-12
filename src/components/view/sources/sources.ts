import './sources.css';
import { ElemNull, IDataSources, TempElemNull } from '../../../types';

class Sources {
    draw(data: IDataSources[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: TempElemNull = document.querySelector('#sourceItemTemp');

        if (sourceItemTemp) {
            data.forEach((item) => {
                const sourceItemClone: Node | DocumentFragment = sourceItemTemp.content.cloneNode(true);

                if (sourceItemClone instanceof DocumentFragment) {
                    const elementItemName: Element | null = sourceItemClone.querySelector('.source__item-name');
                    if (elementItemName) {
                        elementItemName.textContent = item.name;
                    }
                    const elementItem: ElemNull = sourceItemClone.querySelector('.source__item');
                    if (elementItem) {
                        elementItem.setAttribute('data-source-id', item.id);
                    }
                }

                fragment.append(sourceItemClone);
            });
        }
        const sourceContainer: ElemNull = document.querySelector('.sources');
        if (sourceContainer) {
            sourceContainer.append(fragment);
        }
    }
}

export default Sources;
