import mongoose from 'mongoose'
const Schema = mongoose.Schema

const BagSchema = new Schema({
  clientId: Number,
  amount: Number
})

export default mongoose.model('Bag', BagSchema)