const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')


const app = express()
const PORT = 3000



require('dotenv').config()
app.use(morgan('dev'))
app.use(express.json())
app.use('/images', express.static(path.join(__dirname,'public/images')))
app.use(express.static(path.join(__dirname,'build',)))
app.use(cors())

app.use('/api/shows', require('./routes/shows'))
app.use('/api/tours', require('./routes/tours'))
app.use('/api/artists', require('./routes/artistsRoutes'))
app.use('/api/venues', require('./routes/venues'))
app.use('/api/genres', require('./routes/genres'))
// app.use('/api/users/login' ,require('./routes/api/users'))

//API ROUTES
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, function(){
    console.log(`Express app is running on ${PORT}`)
})

