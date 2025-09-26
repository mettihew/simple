
// src/lib/db.ts

import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URI as string)
.then(() => console.log("connected to mongodb successfully"))
.catch((err) => console.log(err))


