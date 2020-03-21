import {columnsConstructor} from "../../../src/models/columnsConstructor";

describe("columnsConstructor", () => {
    describe("ofFourCards", () => {
        describe("cards.length === 4", () => {
            it("retourne un tableau d'une columns de 4 cartes", () => {
               // given
               const cards = [1, 2, 3, 4];
               const expectedColumns = [cards];
               // when
                const result = columnsConstructor.ofFourCards(cards);
                expect(result).toEqual(expectedColumns);
            });
        });
        describe("cards.length === 5", () => {
            it("retourne un tableau de deux columns de 4 cartes maximum", () => {
                // given
                const cards = [1, 2, 3, 4, 5];
                const expectedColumns = [[1, 2, 3, 4], [5]];
                // when
                const result = columnsConstructor.ofFourCards(cards);
                expect(result).toEqual(expectedColumns);
            });
        });
        describe("cards.length === 9", () => {
            it("retourne un tableau de trois columns de 4 cartes maximum", () => {
                // given
                const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                const expectedColumns = [[1, 2, 3, 4], [5, 6, 7, 8], [9]];
                // when
                const result = columnsConstructor.ofFourCards(cards);
                expect(result).toEqual(expectedColumns);
            });
        });
        describe("cards.length === 13", () => {
            it("retourne un tableau de quatre columns de 4 cartes maximum", () => {
                // given
                const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                const expectedColumns = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13]];
                // when
                const result = columnsConstructor.ofFourCards(cards);
                expect(result).toEqual(expectedColumns);
            });
        });
    });
});