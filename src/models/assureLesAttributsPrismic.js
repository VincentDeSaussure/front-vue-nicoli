export function assureLAttribut(prismicData) {
  if (prismicData.length > 1) {
    return prismicData.map(e => e.text).join(', ')
  }
  if(prismicData.length) return prismicData[0].text
  if (prismicData.link_type === 'Web') return prismicData.url
  return ''
}