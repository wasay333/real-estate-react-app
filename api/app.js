import express from 'express'
import postRoute from './routes/post.route.js'
import authRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use('/api/posts', postRoute)
app.use('/api/auth', authRoute)
app.use(cookieParser())
app.listen(8800, ()=>{
    console.log('app is running on port')
})