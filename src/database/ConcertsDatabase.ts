import ConcertsModel, {
    ConcertsCreateInput,
    ConcertsUpdateInput,
} from './models/ConcertsModel';
import BaseDatabase from './BaseDatabase';

export default class ConcertsDatabase extends BaseDatabase {
    tableName = 'concerts';

    create = async (input: ConcertsCreateInput) => {
        try {
            const { id, week_day, start_time, end_time, band_id } =
                input;

            const concertsModel = new ConcertsModel(
                id,
                week_day,
                start_time,
                end_time,
                band_id
            );

            const concert = concertsModel.getConcertsModel();

            await this.connection(this.tableName).insert(concert);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    update = async (input: ConcertsUpdateInput) => {
        try {
            const { id, week_day, start_time, end_time, band_id } =
                input;

            const inputDB = {
                id,
                week_day,
                start_time,
                end_time,
                band_id,
            };

            await this.connection(this.tableName)
                .update(inputDB)
                .where(id);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    selectById = async (id: string) => {
        try {
            const result = await this.connection(this.tableName)
                .select()
                .where({ id });

            if (!result) {
                throw new Error(
                    'Show não encontrado, por favor, verifique os parâmetros enviados.'
                );
            }

            const concert = ConcertsModel.toConcertsModel(result[0]);

            return concert;
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    selectByEmail = async (email: string) => {
        try {
            const result = await this.connection(this.tableName)
                .select()
                .where({ email });

            if (!result) {
                throw new Error(
                    'Show não encontrado, por favor, verifique os parâmetros enviados.'
                );
            }

            const concert = ConcertsModel.toConcertsModel(result[0]);

            return concert;
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    delete = async (id: string) => {
        try {
            await this.connection(this.tableName)
                .delete()
                .where({ id });
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };
}
