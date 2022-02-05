export default class ConcertsModel {
    private readonly id: string;
    private readonly week_day: string;
    private readonly start_time: string;
    private readonly end_time: string;
    private readonly band_id: string;
    constructor(
        id: string,
        week_day: string,
        start_time: string,
        end_time: string,
        band_id: string
    ) {
        this.id = id;
        this.week_day = week_day;
        this.start_time = start_time;
        this.end_time = end_time;
        this.band_id = band_id;
    }

    public getConcertsModel() {
        const id = this.id;
        const week_day = this.week_day;
        const start_time = this.start_time;
        const end_time = this.end_time;
        const band_id = this.band_id;

        const concertModel = {
            id,
            week_day,
            start_time,
            end_time,
            band_id,
        };

        return concertModel
    }

    public static toConcertsModel(input?: any) {
        const concert: ConcertsModel = new ConcertsModel(
            input.id,
            input.week_day,
            input.start_time,
            input.end_time,
            input.band_id
        );

        return concert;
    }
}

export interface ConcertsCreateInput {
    id: string;
    week_day: string;
    start_time: string;
    end_time: string;
    band_id: string;
}
export interface ConcertsUpdateInput {
    id: string;
    week_day?: string;
    start_time?: string;
    end_time?: string;
    band_id?: string;
}
