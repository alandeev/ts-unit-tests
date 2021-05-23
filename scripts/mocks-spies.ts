import { getId } from "./utils"

const main = async (isThrow: boolean, call: boolean) => {
    if(call) {
        const id = getId(isThrow);
    
        return id;
    }

    return null;
}



export default main;