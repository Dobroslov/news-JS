import { Source } from '../../../types';
import './sources.css';

class Sources {
    draw(data: Source[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
        if (sourceItemTemp) {
            data.forEach((item) => {
                const sourceClone: Node | DocumentFragment = sourceItemTemp.content.cloneNode(true);
                if (sourceClone instanceof DocumentFragment) {
                    const sourceItemName: Element | null = sourceClone.querySelector('.sourceitem-name');
                    if (sourceItemName) {
                        sourceItemName.textContent = item.name;
                    }
                    const sourceItem: Element | null = sourceClone.querySelector('.sourceitem');
                    if (sourceItem) {
                        sourceItem.setAttribute('data-source-id', item.id);
                    }
                }

                fragment.append(sourceClone);
            });
        }
        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources;
