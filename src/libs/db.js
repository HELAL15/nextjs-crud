import mongoose from "mongoose"

export default async function connectDB () {
  try {
    await mongoose.connect(process.env.MONGO_URL
    , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("MongoDB connected")
  } catch (error) {
    console.log(error)
  }
}