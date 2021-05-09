export function assureLesAttributs(prismicData) {
  if (prismicData.length > 1) {
    return prismicData.map(e => e.text).join(', ')
  }
  return prismicData.length ? prismicData[0].text : ''
}