import {nombreDeColumnsSelonLeNombreDeCartes} from "../../../src/models/nombreDeColumnsSelonLeNombreDeCartes";

describe("nombreDeColumnsSelonLeNombreCarte", () => {
   it("retourne 1 quand le nombre de carte est de 3", () => {
       // given
      const nombreDeCartes = 3;
      const expectedresult = 1;
      // when
      const result = nombreDeColumnsSelonLeNombreDeCartes(nombreDeCartes);
      // then
      expect(result).toEqual(expectedresult);
   })
   it("retourne 0 quand le nombre de carte est de 0", () => {
      // given
      const nombreDeCartes = 0;
      const expectedresult = 0;
      // when
      const result = nombreDeColumnsSelonLeNombreDeCartes(nombreDeCartes);
      // then
      expect(result).toEqual(expectedresult);
   });
   it("retourne 2 quand le nombre de carte est de 5", () => {
      // given
      const nombreDeCartes = 5;
      const expectedresult = 2;
      // when
      const result = nombreDeColumnsSelonLeNombreDeCartes(nombreDeCartes);
      // then
      expect(result).toEqual(expectedresult);
   });
});