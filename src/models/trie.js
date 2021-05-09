function extraitAnnéeMois(annee) {
  const nombre = annee.match(/^(\d\d\d\d)-(\d\d)-\d\d/)
  return parseInt(nombre[1] + nombre[2])
}

const chronologiqueDécroissante = (a, b) => {
  return extraitAnnéeMois(b.annee) - extraitAnnéeMois(a.annee)
}

export const trie = {
  chronologiqueDécroissante
}