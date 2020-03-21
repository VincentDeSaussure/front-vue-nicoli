export const nombreDeColumnsSelonLeNombreDeCartes = longueurDuTableauDeCarte => {
    if (longueurDuTableauDeCarte === 0) return 0;
    if (longueurDuTableauDeCarte % 4 === 0) return longueurDuTableauDeCarte / 4;
    return Math.floor(longueurDuTableauDeCarte / 4) + 1;
};