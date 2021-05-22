import { trie } from '@/models/trie'

function récupèreLIndex(key: string) {
  // @ts-ignore
  return key.match(/titre_section_(\d)/)[1]
}

const contient = (acc: Ligne[]) => (annee: string) =>{
  return acc.some(ligne => ligne.annee === annee)
}

function grouperParAnnee(tableauObjets: LigneData[]){
  const LignesVide: Ligne[] = []
  return tableauObjets.reduce(function (acc, obj) {
    // @ts-ignore
    var annee = obj.annee?.match(/^(\d\d\d\d)-\d\d-\d\d$/)[1]
    if (annee && !contient(acc)(annee)) {
      // @ts-ignore
      acc.push(new Ligne(annee, obj.annee))
    }
    const ligne = acc.find((ligne: Ligne) => ligne.annee === annee)?.ajouteDescription(obj.description[0].text)
    return acc;
  }, LignesVide);
}

const Lignes = {
  grouperParAnnee
}

class Ligne {
  public readonly descriptions: string[] = []
  constructor(
    public readonly annee: string,
    public readonly datetime: string
  ) {}

  ajouteDescription(description: string) {
    this.descriptions.push(description)
  }
}

interface Text {
  text: string
}

interface LigneData {
  annee: string
  description: Text[]
}

class Section {
  public readonly lignes: Ligne[]
  constructor(public readonly titre: string, lignes: LigneData[]) {
    this.lignes = Lignes.grouperParAnnee(lignes).sort(trie.chronologiqueDécroissant('datetime'))
  }
}

function from(data: any): Section[] {
  const sections: Section[] = []
  Object.keys(data).forEach(key => {
    if (key.match(/^titre_section/)) {
      const indexDeLaSection = récupèreLIndex(key)
      sections.push(new Section(data[key][0].text, data[`ligne_section_${indexDeLaSection}`]))
    }
  })
  return sections
}

export const PrepareCV = {
  from
}
