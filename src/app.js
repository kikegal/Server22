import express from 'express'
import toursRoutes from './routes/tours.routes.js'
import indexRoutes from './routes/index.routes.js'

import {PORT} from './config.js'
import morgan from 'morgan'

const app = express() 

app.use (express.json())

app.use(morgan('dev'))

app.use(indexRoutes)
app.use('/api', toursRoutes)

app.use ((req, res, next) => {
    res.status(404).json({
        message:'Endpoint not found'
    })
})

export default app;