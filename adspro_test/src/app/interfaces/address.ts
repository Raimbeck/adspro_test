import { Street } from "./street";

export class Address {
    id: string;
    type: string;
    postalCode: string;
    city: string;
    street: Street;

    constructor() {
        this.id = '';
        this.type = '';
        this.postalCode = '';
        this.city = '';
        this.street = {
            id: '',
            street1: '',
            street2: ''
        }
    }
}
