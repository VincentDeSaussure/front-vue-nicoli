import {spliceCards} from "../../../src/models/spliceCards";

describe("spliceCards", () => {
    describe("intoLevelOfFourCard", () => {
        it("should return true", () => {
            const cards = [];
            const result = spliceCards.intoLevelOfFourCards(cards);
            expect(result).toBe(cards);
        });
    });
});