import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import eventsRouter from './routes/eventRoutes';


dotenv.config();

const app = express()
const PORT = process.env.PORT || 3000


//Middleware
app.use(express.json())
app.use(cors())

//Routes
app.use('/api/events', eventsRouter)
// app.use('/api/tours', require('./routes/tours'))
// app.use('/api/artists', require('./routes/artistsRoutes'))
// app.use('/api/venues', require('./routes/venues'))
// app.use('/api/genres', require('./routes/genres'))
// app.use('/api/users/login' ,require('./routes/api/users'))

//API ROUTES
// app.get('/*', function(req,res){
//     res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })


app.listen(PORT, function(){
    console.log(`Express app is running on ${PORT}`)
})

