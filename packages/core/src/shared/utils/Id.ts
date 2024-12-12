import { v4 as uuidv4, validate as uuidValidate } from 'uuid'

export default class Id {
    static new():string {
        return uuidv4()
    };
    static validate(id: string): boolean {
        return uuidValidate(id)
    }
}