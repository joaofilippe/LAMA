import BaseDatabase from '../BaseDatabase';

const argv: string = process.argv[2];

class UserMigrations extends BaseDatabase {
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
                        table.string('name').notNullable();
                        table.string('email').notNullable().unique();
                        table.string('password').notNullable();
                        table.string('role').notNullable().defaultTo('normal');
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
    const userMigrations = new UserMigrations();
    if (argv === 'check') {
        const check = await userMigrations.check();
        if (check) {
            console.log(
                `A tabela "${userMigrations.tableName}" já existe em seu banco de dados.`
            );
        } else {
            console.log(
                `A tabela "${userMigrations.tableName}" não existe em seu banco de dados.`
            );
        }
        userMigrations.destroy();
    } else if (argv === 'create') {
        await userMigrations.create();
    } else if (argv === 'drop') {
        await userMigrations.drop();
    } else {
        console.log('Parâmetros inválidos');
    }
};

migrations(argv);
