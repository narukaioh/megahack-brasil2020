import mongoose from 'mongoose'
import Bag from './bag'

mongoose.Promise = global.Promise

mongoose.connect(`mongodb://localhost:27017/bagbank`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export default Bag