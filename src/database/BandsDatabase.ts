import BandsModel, {
    BandsCreateInput,
    BandsUpdateInput,
} from './models/BandsModel';
import BaseDatabase from './BaseDatabase';

export default class BandsDatabase extends BaseDatabase {
    tableName = 'bands';

    create = async (input: BandsCreateInput) => {
        try {
            const { id, name,music_genre, responsible } = input;

            const bandsModel = new BandsModel(
                id,
                name,
                music_genre,
                responsible
            );

            const band = bandsModel.getBandsModel();

            this.connection(this.tableName).insert(bandsModel);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    update = async (input: BandsUpdateInput) => {
        try {
            const { id, name, music_genre, responsible } = input;

            const inputDB = { name, music_genre, responsible };

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
                    'Banda não encontrada, por favor, verifique os parâmetros enviados.'
                );
            }

            const band = BandsModel.toBandsModel(result[0]);

            return band;
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
                    'Banda não encontrada, por favor, verifique os parâmetros enviados.'
                );
            }

            const band = BandsModel.toBandsModel(result[0]);

            return band;
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
