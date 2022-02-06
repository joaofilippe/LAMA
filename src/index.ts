import {app, server} from './app'
import bandsRouter from './controller/routes/BandsRouter'
import concertsRouter from './controller/routes/ConcertsRouter'
import usersRouter from './controller/routes/UsersRouter';
import UsersMigrations from './database/migrations/UsesrMigrations'
import BandsMigrations from './database/migrations/BandsMigrations';
import ConcertsMigrations from './database/migrations/ConcertsMigrations';


const usersMigrations = new UsersMigrations()
const bandsMigrations = new BandsMigrations()
const concertsMigrations = new ConcertsMigrations()

usersMigrations.create()
bandsMigrations.create()
concertsMigrations.create()


app.use('/users', usersRouter)
app.use('/bands', bandsRouter)
app.use('/concerts', concertsRouter)

server