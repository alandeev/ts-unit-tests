import { v4 as uuidv4 } from 'uuid'

const getId = (isThrow: boolean): string => {
    if(isThrow) {
        throw new Error('teste error')
    }

    return uuidv4();
}

export {
    getId
};