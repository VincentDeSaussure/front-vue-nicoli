import {nombreDeColumnsSelonLeNombreDeCartes} from "./nombreDeColumnsSelonLeNombreDeCartes";

export const columnsConstructor = {
    ofFourCards(cards) {
        let columnss = Array.from({
            length: nombreDeColumnsSelonLeNombreDeCartes(cards.length)
        }, () => []);
        let indexDeLaColumn = -1;
        cards.map((card, index) => {
            if (index % 4 === 0 || index === 0) {
                indexDeLaColumn++
            }
            columnss[indexDeLaColumn].push(card);
        });
        return columnss;
    }
};