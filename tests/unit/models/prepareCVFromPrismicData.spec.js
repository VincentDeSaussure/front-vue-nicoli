import {prepareCVFrom} from '@/models/prepareCVFromPrismicData'

it('Sépare les infos contacts des sections du cv, et associe les titres au lignes correspondantes', () => {
  const prismicData = {
    contact: 'something',
    email: 'someone@something.com',
    titre_section_1: 'Expositions',
    titre_section_2: 'Presse',
    ligne_section_1: [{ description: 'ligne exposition', date: '2020'}],
    ligne_section_2: [{ description: 'ligne presse' }]
  }

  const result = prepareCVFrom(prismicData)
  expect(result).toEqual({
    contact: 'something',
    email: 'someone@something.com',
    sections: [
      { titre: 'Expositions', lignes: [{ description: 'ligne exposition', date: '2020' }] },
      { titre: 'Presse', lignes: [{ description: 'ligne presse' }] },
    ]
  })
})