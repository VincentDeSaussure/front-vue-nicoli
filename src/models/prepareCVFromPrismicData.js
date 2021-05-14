function récupèreLIndex(key) {
  return key.match(/titre_section_(\d)/)[1]
}

export function prepareCVFrom(data) {
  const sections = []
  Object.keys(data).forEach(key => {
    if (key.match(/^titre_section/)) {
      const indexDeLaSection = récupèreLIndex(key)
      sections.push({ titre: data[key][0].text, lignes: data[`ligne_section_${indexDeLaSection}`]})
      delete data[key]
      delete data[`ligne_section_${indexDeLaSection}`]
    }
  })
  return sections
}