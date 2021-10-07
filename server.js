const express = require('express')
const connectDB = require('./db')

const app = express()

// Connect to MongoDB Database
connectDB()

app.get('/', (req, res) => {
  res.send('API Running')
})

// Defining Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/pets', require('./routes/api/pets'))

// Access process vars via dotenv
require('dotenv').config()
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
