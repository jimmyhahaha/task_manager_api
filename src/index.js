const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT
/*
const multer = require('multer')
const upload = multer({
    dest: 'images'
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})
*/
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up running on port ' + port)
})

//const Task = require('./models/task')
//const User = require('./models/user')

// const main = async () => {
//     const task = await Task.findById('5d8438bcd3f00725643ccdb7')
//     await task.populate('owner').execPopulate()
//     console.log(task.owner)
//     const user = await User.findById('5d8434d95a623326d40f6c4b')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
//  }

// main()