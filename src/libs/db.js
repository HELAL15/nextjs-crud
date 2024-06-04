import mongoose from "mongoose"

export default async function connectDB () {
  try {
    await mongoose.connect('mongodb+srv://1ahmedhelal1:gTI4UmGrUG6KQ1u5@next-crud.cb5c4ru.mongodb.net/'
    , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("MongoDB connected")
  } catch (error) {
    console.log(error)
  }
}