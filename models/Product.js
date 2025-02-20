import mongoose, {model, Schema, models} from "mongoose";

const ProductSchema = new Schema({
  title: {type:String, required:true},
  description: String,
  details: {type:String},
  included: [{type:String}],  // Array of items included
  notIncluded: [{type:String}],  // Array of items not included
  address: {type:String},
  price: {type: Number, required: true},
  images: [{type:String}],
  category: {type:mongoose.Types.ObjectId, ref:'Category'},
  properties: {type:Object},
  language: [{type:String}],
  numberOfSeats: {type:String},
  babySeat: {type:String},
  disableSeat: {type:String},
  meetAndGreet: {type:String},
}, {
  timestamps: true,
});

export const Product = models.Product || model('Product', ProductSchema);
