import { Mongoose, Schema } from "mongoose";

const DataSchema = new Schema({
  quantity: Number,
}, { timestamps: strue });

const Data = Mongoose.CreateModel("Data", DataSchema);

export default Data;
