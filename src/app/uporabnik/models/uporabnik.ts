import { NakupovalniSeznam } from "./nakupovalniSeznam";

export class Uporabnik {
    id: number;
    ime: string;
    priimek: string;
    uporabniskoIme: string;
    email: string;
    nakupovalniSeznami: NakupovalniSeznam[];
}
