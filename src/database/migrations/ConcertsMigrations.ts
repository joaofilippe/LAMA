import BaseDatabase from '../BaseDatabase';

const argv: string = process.argv[2];

class ConcertsMigrations extends BaseDatabase {
    tableName: string = 'concerts';

    destroy = async () => {
        await this.connection.destroy();
    };

    check = async () => {
        try {
            return await this.connection.schema.hasTable(
                this.tableName
            );
        } catch (error: any) {
            console.log(error);
        }
    };

    create = async () => {
        try {
            const check = await this.check();
            if (check) {
                console.log(
                    `A tabela "${this.tableName} "já consta em seu banco de dados.`
                );
            } else {
                await this.connection.schema.createTable(
                    this.tableName,
                    (table) => {
                        table.string('id').primary().notNullable();
                        table.string('week_day').notNullable();
                        table.string('start_time').notNullable();
                        table.string('end_time').notNullable();
                        table
                            .string('band_id')
                            .notNullable()
                            .references('id')
                            .inTable('bands');
                    }
                );
            }

            console.log(
                `A tabela "${this.tableName}" foi criada com sucesso.`
            );
        } catch (error: any) {
            console.log(error);
        } finally {
            this.connection.destroy();
        }
    };

    drop = async () => {
        try {
            const check = await this.check();

            if (!check) {
                console.log(
                    `A tabela "${this.tableName}" não consta em seu banco de dados.`
                );
            } else {
                await this.connection.schema.dropTable(
                    this.tableName
                );
                console.log(
                    `A tabela "${this.tableName}" foi excluída com sucesso.`
                );
            }
        } catch (error: any) {
            console.log(error);
        } finally {
            this.connection.destroy();
        }
    };
}

const migrations = async (argv: string) => {
    const concertsMigrations = new ConcertsMigrations();
    if (argv === 'check') {
        const check = await concertsMigrations.check();
        if (check) {
            console.log(
                `A tabela "${concertsMigrations.tableName}" já existe em seu banco de dados.`
            );
        } else {
            console.log(
                `A tabela "${concertsMigrations.tableName}" não existe em seu banco de dados.`
            );
        }
        concertsMigrations.destroy();
    } else if (argv === 'create') {
        await concertsMigrations.create();
    } else if (argv === 'drop') {
        await concertsMigrations.drop();
    } else {
        console.log('Parâmetros inválidos');
    }
};

migrations(argv);
