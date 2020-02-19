import mongoose from 'mongoose'
import Bag from './bag'

mongoose.Promise = global.Promise

mongoose.connect(`${process.env.MONGODB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export default Bag