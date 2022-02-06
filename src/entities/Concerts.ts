export enum WEEK_DAY {
    FRI = 'FRIDAY',
    SAT = 'SATURDAY',
    SUN = 'SUNDAY',
}

export default class ConcertsModel {
    private readonly id: string;
    private readonly weekDay: WEEK_DAY;
    private readonly startTime: string;
    private readonly endTime: string;
    private readonly bandId: string;
    constructor(
        id: string,
        weekDay: WEEK_DAY,
        startTime: string,
        endTime: string,
        bandId: string
    ) {
        this.id = id;
        this.weekDay = weekDay;
        this.startTime = startTime;
        this.endTime = endTime;
        this.bandId = bandId;
    }

    public getConcertsModel() {
        const id = this.id;
        const weekDay = this.weekDay;
        const startTime = this.startTime;
        const endTime = this.endTime;
        const bandId = this.bandId;

        const concertModel = {
            id,
            weekDay,
            startTime,
            endTime,
            bandId,
        };

        return concertModel;
    }

    public static toConcertsModel(input?: any) {
        const concert: ConcertsModel = new ConcertsModel(
            input.id,
            input.weekDay,
            input.startTime,
            input.endTime,
            input.bandId
        );

        return concert;
    }

    public getId = () => {
        return this.id;
    };
    public getWeekDay = () => {
        return this.weekDay;
    };

    public getStartTime = () => {
        return this.startTime;
    };
    public getEndTime = () => {
        return this.endTime;
    };
    public getBandId = () => {
        return this.bandId;
    };

    public getWeekDayAsString = () => {
        switch (this.weekDay) {
            case WEEK_DAY.FRI:
                return 'FRIDAY';
                break;
            case WEEK_DAY.SAT:
                return 'SATURDAY';
                break;
            case WEEK_DAY.SUN:
                return 'SUNDAY';
                break;
            default:
                'Parâmetros inválidos';
                break;
        }
    };
}

export interface ConcertsInputDTO {
    weekDay: string;
    startTime: string;
    endTime: string;
    bandId: string;
    token: string;
}

export interface GetByIdInputDTO {
    id: string;
    token: string;
}

export interface GetByWeekDayInputDTO {
    weekDay: string;
    token: string;
}

export interface GetByBandIdInputDTO {
    bandId: string;
    token: string;
}

export interface ConcertsUpdateInputDTO {
    id: string;
    weekDay?: WEEK_DAY;
    startTime?: string;
    endTime?: string;
    bandId?: string;
    token: string;
}

export interface DeleteInputDTO {
    id: string;
    token: string;
}
