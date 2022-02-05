import {app, server} from './app'
import UsersRouter from './controller/routes/UsersRouter'
import BandsRouter from './controller/routes/BandsRouter'
import ConcertsRouter from './controller/routes/ConcertsRouter'

app.use('/users', UsersRouter)
app.use('/bands', BandsRouter)
app.use('/concerts', ConcertsRouter)

server