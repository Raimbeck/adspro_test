import { Address } from "./address";
import { Phone } from "./phone";
import { Email } from "./email";
import { Change } from "./change";

export class Customer {
    id: string;
    name: string;
    surname: string;
    middleName: string;
    notes: string;
    userId: string;
    issuerId: string;
    addresses: Address[];
    phones: Phone[];
    emails: Email[];
    changes: Change[];

    constructor(init?: Partial<Customer>) {
        this.emails = [];
        this.phones = [];
        this.addresses = [];
        this.changes = [];
        Object.assign(this, init);
    }
}
