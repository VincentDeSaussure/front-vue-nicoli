import {rangDImage} from "@/models/rangDImage";

describe("rang d'image", () => {
    describe("de 4", () => {
        describe("quand le nombre d'image à ranger est à 4", () => {
            it("retourne un rang de 4 images", () => {
               // given
               const cards = [1, 2, 3, 4];
               const expectedColumns = [cards];
               // when
                const result = rangDImage.de(4)(cards);
                expect(result).toEqual(expectedColumns);
            });
        });
        describe("quand le nombre d'image à ranger est à 5", () => {
            it("retourne deux rang, un de 4 et un de 1", () => {
                // given
                const cards = [1, 2, 3, 4, 5];
                const expectedColumns = [[1, 2, 3, 4], [5]];
                // when
                const result = rangDImage.de(4)(cards);
                expect(result).toEqual(expectedColumns);
            });
        });
        describe("quand le nombre d'image à ranger est à 9", () => {
            it("retourne trois rang, deux de 4 et un de 1", () => {
                // given
                const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                const expectedColumns = [[1, 2, 3, 4], [5, 6, 7, 8], [9]];
                // when
                const result = rangDImage.de(4)(cards)
                expect(result).toEqual(expectedColumns);
            });
        })
    });
});