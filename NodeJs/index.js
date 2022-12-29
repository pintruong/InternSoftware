const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const cors = require('cors')



const app = express()
app.use(cors())
const port = 8080



app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
//- point end
app.get('/', (request, response) => {
  response.json({ info: 'Localhost Load Success' })
})

// - Register and Login here..---//

app.use('/auth', require('./JWTAuth'))



///---Product---///
app.get('/products', db.getProducts)
app.get('/products/ascendingProduct', db.ascendingProduct)
app.get('/products/descendingProduct', db.descendingProduct)
app.post('/products', db.createProduct)
app.put('/products/:id', db.updateProduct)
app.delete('/products/:id', db.deleteProduct)

///---category---///
app.get('/categorys', db.getCategorys)
app.get('/categorys/:id', db.getCategorys)
app.post('/categorys', db.createCategory)
app.put('/categorys/:id', db.updateCategory)
app.delete('/categorys/:id', db.deleteCategory)

///---users-JWT---///
app.get('/users', db.getUsers)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


