import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGOOSE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('connected to db')
  } catch (err) {
    console.log(err.message);
  }
}
