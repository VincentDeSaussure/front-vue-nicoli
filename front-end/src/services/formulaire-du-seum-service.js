import { httpService } from "./http-service";

export const formulaireDuSeumService = {

    fetchListeDeSeum() {
        const seumPath = `http://localhost:1337/seums`
        return httpService.get({ path: seumPath })
    },

    submitFormulaireDuSeum(formulaireSeumSubmitted) {
        const formulaireSeumResponsePath = `http://localhost:1337/reponse`
        return httpService.post(
            {
                path: formulaireSeumResponsePath,
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