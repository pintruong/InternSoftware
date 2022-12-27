const router = require('express').Router()
const pool = require('./db')
const bcrypt = require('bcrypt')
const jwtGenerator = require('./jwtGenerator')


//--- Router Register JWT Authentication here ---//


router.post('/register', async (req, res) => {
  try {

    const { name, email, password } = req.body

    const user = await pool.query('SELECT * FROM users WHERE email = $1', [
      email
    ])

    if (user.rows.length !== 0) {
      return res.status(201).send("User already exist")
    }

    //- Bcrypt -
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound)
    const bcryptPassword = await bcrypt.hash(password, salt)

    // - insert users new
    const newUser = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, bcryptPassword])
    // res.json(newUser.rows[0])
    const token = jwtGenerator(newUser.rows[0].id)
    res.json({ token })


  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }

})

//--- Router Login JWT Authentication here ---//

router.post('/login', async (req, res) => {

 

  try {
    const { email, password } = req.body

    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email])

    if (user.rows.length === 0) {
      return res.status(401).json("SAi tai khoan")
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password)
    
    if (!validPassword) {
      return res.status(401).json("Invalid Credetial - ")
    }
    
    const token = jwtGenerator(user.rows[0].id)
    return res.json( { token })

  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})
module.exports = router;
