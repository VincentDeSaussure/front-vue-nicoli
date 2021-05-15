import {prepareCVFrom} from '@/models/prepareCVFromPrismicData'

it('Sépare les infos contacts des sections du cv, et associe les titres au lignes correspondantes', () => {
  const prismicData = {
    contact: 'something',
    email: 'someone@something.com',
    titre_section_1: [{text: 'Expositions'}],
    titre_section_2: [{ text: 'Presse'}],
    ligne_section_1: [{ description: [{ text: 'ligne exposition'}], annee: '2020-01-01'}],
    ligne_section_2: [{ description: [{ text: 'ligne presse'}], annee: '2020-01-01' }]
  }

  const result = prepareCVFrom(prismicData)
  expect(result).toEqual([
      { titre: 'Expositions', lignes: [{ descriptions: ['ligne exposition'], année: '2020' }] },
      { titre: 'Presse', lignes: [{ descriptions: ['ligne presse'], année: '2020' }] },
    ])
})