import { httpService } from "./http-service";

export const formulaireDuSeumService = {

    fetchListeDeSeum() {
        const seumPath = `http://localhost:1337/seums`
        return httpService.get({ path: seumPath })
    },

    submitFormulaireDuSeum(formulaireSeumSubmitted) {
        const formulaireSeumReponsePath = `http://localhost:1337/reponse`
        return httpService.post(
            {
                path: formulaireSeumReponsePath,
                params: formulaireSeumSubmitted
            }
        ).then().catch()
    },

    addSeum(seumToAdd) {
        const seumPath = `http://localhost:1337/seums`
        return httpService.post(
            {
                path: seumPath,
                params: seumToAdd
            }
        )
    }

}