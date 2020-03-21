export const spliceCards = {
    intoLevelOfFourCards(cards) {
        const levelOne = cards.splice(0, 4);
        const levelTwo = cards.splice(4, 8);
        return [levelOne, levelTwo];
    }
}