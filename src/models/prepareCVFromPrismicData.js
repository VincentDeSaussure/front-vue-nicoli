function récupèreLIndex(key) {
  return key.match(/titre_section_(\d)/)[1]
}

function grouperParAnnée(tableauObjets){
  return tableauObjets.reduce(function (acc, obj) {
    var année = obj['annee'] ? obj['annee'].match(/^(\d\d\d\d)-\d\d-\d\d$/)[1] : null
    if(!acc.some(ligne => ligne.année === année)){
      acc.push(new Ligne(année))
    }
    const ligne = acc.find(ligne => ligne.année === année).ajouteDescription(obj.description[0].text)
    return acc;
  }, []);
}

const Lignes = {
  grouperParAnnée
}

class Ligne {
  constructor(année) {
    this.année = année
    this.descriptions = []
  }

  ajouteDescription(description) {
    this.descriptions.push(description)
  }
}

class Section {
  constructor(titre, lignes) {
    this.titre = titre
    this.lignes = Lignes.grouperParAnnée(lignes)
  }
}

export function prepareCVFrom(data) {
  const sections = []
  Object.keys(data).forEach(key => {
    if (key.match(/^titre_section/)) {
      const indexDeLaSection = récupèreLIndex(key)
      sections.push(new Section(data[key][0].text, data[`ligne_section_${indexDeLaSection}`]))
      delete data[key]
      delete data[`ligne_section_${indexDeLaSection}`]
    }
  })
  return sections
}