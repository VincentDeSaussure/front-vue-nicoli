import {imageNumberKeyFromPrismicDataToArray} from '@/models/imageNumberKeyFromPrismicDataToArray'

describe('model', () => {
  it('transform images data to array, passing away other attributes', () => {
    const data = {
      image1: { 'id': 1 },
      image2: { 'id': 2 },
      image3: { 'id': 3 },
      somethingBad: 'bad duck'
    }
    const expectedArray = [{ 'id': 1 }, { 'id': 2 }, { 'id': 3 }]
    const array = imageNumberKeyFromPrismicDataToArray(data)
    expect(expectedArray).toEqual(array)
  })
})