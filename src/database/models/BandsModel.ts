export default class BandsModel {
    private readonly id: string;
    private readonly name: string;
    private readonly music_genre: string;
    private readonly responsible: string;
    constructor(
        id: string,
        name: string,
        music_genre: string,
        responsible: string,
    ) {
        this.id = id;
        this.name = name;
        this.music_genre = music_genre;
        this.responsible = responsible;
    }

    public getBandsModel() {
        const id = this.id;
        const name = this.name;
        const music_genre = this.music_genre;
        const responsible = this.responsible;

        const bandModel = {
            id,
            name,
            music_genre,
            responsible,
        };

        return bandModel
    }

    public static toBandsModel(input?: any) {
        const band: BandsModel = new BandsModel(
            input.id,
            input.name,
            input.music_genre,
            input.responsible
        );

        return band;
    }
}

export interface BandsCreateInput {
    id: string;
    name: string;
    music_genre: string;
    responsible: string;
}
export interface BandsUpdateInput {
    id: string;
    name?: string;
    music_genre?: string;
    responsible?: string;
}
