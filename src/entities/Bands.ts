//* Class:

export default class Bands {
    private readonly id: string;
    private readonly name: string;
    private readonly musicGenre: string;
    private readonly responsible: string;
    constructor(
        id: string,
        name: string,
        musicGenre: string,
        responsible: string
    ) {
        this.id = id;
        this.name = name;
        this.musicGenre = musicGenre;
        this.responsible = responsible;
    }

    public getId(){
        return this.id
    }

    public getName(){
        return this.name
    }

    public getMusicGenre(){
        return this.musicGenre
    }

    public getResponsible(){
        return this.responsible
    }

    public getBandsModel() {
        const id = this.id;
        const name = this.name;
        const musicGenre = this.musicGenre;
        const responsible = this.responsible;

        const bandModel = {
            id,
            name,
            musicGenre,
            responsible,
        };

        return bandModel;
    }

    public static toBandsModel(input?: any) {
        const band: Bands = new Bands(
            input.id,
            input.name,
            input.musicGenre,
            input.responsible
        );

        return band;
    }
}


// * Interfaces:

export interface BandsCreateInputDTO {
    name: string;
    musicGenre: string;
    responsible: string;
    token: string;
}

export interface GetByIdInputDTO {
    id: string;
    token: string;
}

export interface GetByMusicGenreInputDTO {
    musicGenre: string;
    token: string;
}

export interface GetByResponsibleInputDTO {
    responsible: string;
    token: string;
}

export interface BandsUpdateInputDTO {
    id: string;
    name?: string;
    musicGenre?: string;
    responsible?: string;
    token: string
}
export interface DeleteInputDTRO {
    id: string;
    token: string;
}
