import { Artikel } from './artikel';
import { Uporabnik } from './uporabnik';

export class NakupovalniSeznam {
    id: number;
    naziv: string;
    opis: string;
    status: string;
    uporabnik: Uporabnik;
    artikli: Artikel[];
}
