import {app, server} from './app'
import bandsRouter from './controller/routes/BandsRouter'
import concertsRouter from './controller/routes/ConcertsRouter'
import usersRouter from './controller/routes/UsersRouter';

app.use('/users', usersRouter)
app.use('/bands', bandsRouter)
app.use('/concerts', concertsRouter)

server