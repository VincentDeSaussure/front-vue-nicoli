export const rangDImage = {
    de: (nbParRang) => (cards) => {
        let index = 0
        let columns = []
        do {
          columns.push(cards.slice(index, nbParRang + index))
          index+=nbParRang
        } while (cards.length > index)
        return columns
    }
};