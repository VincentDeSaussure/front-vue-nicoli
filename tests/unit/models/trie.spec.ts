import {trie} from '@/models/trie'

describe("trier par ", () => {
  describe("chronologique décroissante", () => {
    it("à partir de date type yyyy-mm-dd", () => {
      const annee2020 = '2020-04-31'
      const annee2021 = '2021-04-31'
      const annees = [ { annee: annee2020 }, { annee: annee2021 }]
      const anneeTriées = [ { annee: annee2021 }, { annee: annee2020 }]

      expect(annees.sort(trie.chronologiqueDécroissant('annee'))).toEqual(anneeTriées)
    })
  })
})
