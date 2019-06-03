import { httpService } from "./http-service";

export const formulaireDuSeumService = {

    fetchListeDeSeum() {
        const seumPath = `http://localhost:1337/seums`;
        return httpService.get({ path: seumPath });
    }

}