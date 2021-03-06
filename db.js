const mongoose = require('mongoose')

// Access process vars via dotenv
require('dotenv').config()
const db = process.env.MONGODB_URI

// Connecting to MongoDB With Mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err.message)
    // Exit process with failure
    process.exit(1)
  }
}

module.exports = connectDB
