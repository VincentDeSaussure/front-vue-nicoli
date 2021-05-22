import {PrepareCV} from '@/models/prepareCV'


describe('Prépare CV depuis les données Prismic', () => {
  it('Sépare les infos contacts des sections du cv, et associe les titres au lignes correspondantes', () => {
    const prismicData = {
      contact: 'something',
      email: 'someone@something.com',
      titre_section_1: [{text: 'Expositions'}],
      titre_section_2: [{ text: 'Presse'}],
      ligne_section_1: [{ description: [{ text: 'ligne exposition'}], annee: '2019-01-01'}],
      ligne_section_2: [{ description: [{ text: 'ligne presse'}], annee: '2020-01-01' }]
    }

    const result = PrepareCV.from(prismicData)
    expect(result).toEqual([
      { titre: 'Expositions', lignes: [{ descriptions: ['ligne exposition'], annee: '2019', datetime: "2019-01-01" }] },
      { titre: 'Presse', lignes: [{ descriptions: ['ligne presse'], annee: '2020', datetime: "2020-01-01" }] },
    ])
  })
})
