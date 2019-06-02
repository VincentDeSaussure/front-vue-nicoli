import axios from 'axios'

class FormulaireDuSeumService {

    fetchSeums() {
        const urlApi = "http://localhost:1337/seums";

        axios.get(urlApi).then(response => {
            this.seums = response.data
        }).catch()
    }

}

export default new FormulaireDuSeumService()

