function extraitAnnéeMois(annee: string) {
  const nombre = annee.match(/^(\d\d\d\d)-(\d\d)-\d\d/)
  // @ts-ignore
  return parseInt(nombre[1] + nombre[2])
}

const chronologiqueDécroissant = (clé: string) => (a: any, b: any) => {
  return extraitAnnéeMois(b[clé]) - extraitAnnéeMois(a[clé])
}

export const trie = {
  chronologiqueDécroissant
}
