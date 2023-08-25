import { mongoose, Schema } from "mongoose";

const DataSchema = new Schema({
  quantity: Number,
}, { timestamps: true });

const Data = mongoose.model("Data", DataSchema);

export default Data;
