import {spliceCards} from "../../../src/models/spliceCards";

describe("spliceCards", () => {
    describe("intoLevelOfFourCard", () => {
        it("when cards length is 4, should return an array with a level of 4 cards", () => {
            const cards = [1, 2, 3, 4];
            const levels = spliceCards.intoLevelOfFourCards(cards);
            console.log(cards);
            expect(levels[0]).toEqual(cards);
        });
        it("when cards length is 3, should return an array with a level of 3 cards", () => {
            const cards = [1, 2, 3];
            const levels = spliceCards.intoLevelOfFourCards(cards);
            expect(levels[0]).toEqual(cards);
        });
        it("when cards length is 5, should return an array with two level of 5 cards", () => {
            const cards = [1, 2, 3, 4, 5];
            const expectedLevelOne = [1, 2, 3, 4];
            const expectedLevelTwo = [5];
            const levels = spliceCards.intoLevelOfFourCards(cards);
            expect(levels[0]).toEqual(expectedLevelOne);
            expect(levels[1]).toEqual(expectedLevelTwo);
        });
    });
});