export const columnsConstructor = {
    ofFourCards(cards) {
        let result = [];
        while(cards.length > 4) {
            result.push(cards.splice(0, 4));
        }
        result.push(cards);
        return result;
    }
}