const { json } = require('body-parser')
const { request, response } = require('express')
const { parse } = require('pg-protocol')
// const Pool = require('pg').Pool
const queryString = require('query-string')
const format = require('pg-format')
const pool = require('./db')



// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'api',
//   password: 'postgres',
//   port: 5432,
// })

//-------------------------Product Here-------------------------//

//-----// GET-PRODUCT-HERE...
const getProducts = async (request, response) => {
  const { product_name, product_price } = request.query
  let product_price_where = ''
  if (product_price) {
    try {
      let object = JSON.parse(product_price)
      const { gte, lte, gt, lt } = object
      let arr = []
      if (gte) {
        arr.push(`product_price >= ${gte}`)
      }

      if (lte) {
        arr.push(`product_price <= ${lte}`)
      }

      if (lt) {
        arr.push(`product_price < ${lt}`)
      }

      if (gt) {
        arr.push(`product_price > ${gt}`)
      }
      if (arr.length > 0) {
        product_price_where = arr.join(' and ')
      }
    } catch (error) {
      console.log('Error', error)
      object = product_price
      product_price_where = `product_price=${object}`
    }
  }
  console.log("Log Params Product_name: ", product_name)
  console.log("Log Params Product_price_where: ", product_price_where)
  const result = await pool.query(`SELECT * FROM products where LOWER(product_name) like LOWER($1) ${product_price_where ? `AND ${product_price_where}` : ''}`, [`%${product_name ?? ''}%`])
  response.status(200).json(result.rows)

}

//-----// Sort product-

const ascendingProduct = async (request, response) => {
  try {
    const result = await pool.query(`SELECT * FROM products ORDER BY product_price ASC`)
    response.status(200).json(result.rows)
  } catch {
    console.log('---Error---')
  }
}

const descendingProduct = async (request, response) => {
  try {
    const result = await pool.query(`SELECT * FROM products ORDER BY product_price DESC`)
    response.status(200).json(result.rows)
  } catch {
    console.log('---Error---')
  }
}

//-----// POST-PRODUCT-HERE...
const createProduct = async (request, response) => {
  try {
    const { product_id, product_code, product_name, product_price, category_id } = request.body
    const result = await pool.query('INSERT INTO products ( product_id, product_code, product_name, product_price, category_id ) VALUES ($1, $2, $3, $4, $5)', [product_id, product_code, product_name, product_price, category_id])
    response.status(201).json(result.rows)
  } catch {
    console.log('---Error---')
  }
}

//-----// PUT-PRODUCT-HERE...
const updateProduct = async (request, response) => {
  try {
    const id = parseInt(request.params.id)
    const { product_code, product_name, product_price, category_id } = request.body
    const result = await pool.query('UPDATE products SET product_code = $1, product_name = $2, product_price = $3, category_id = $4 WHERE product_id = $5', [product_code, product_name, product_price, category_id, id])
    response.status(200).json(result.rows)
  } catch {
    console.log('---Error---')
  }

}

//-----// DELETE-PRODUCT-HERE...

const deleteProduct = async (request, response) => {
  try {
    const id = parseInt(request.params.id)
    await pool.query('DELETE FROM products WHERE product_id = $1', [id])
    response.status(200).send(`Deleted Success ID: ${id}`)
  } catch {
    console.log('error......')
  }
}
//-------------------------categorys Here-------------------------//

//-----// GET-categoryS-HERE...
const getCategorys = async (request, response) => {
  try {
    const { category_name } = request.query
    console.log("Log Params Category_name: ", category_name)
    const result = await pool.query('SELECT * FROM categorys where LOWER(category_name) like LOWER($1)', [`%${category_name ?? ''}%`])
    response.status(200).json(result.rows)
  } catch (err) {
    console.log('[GET........error .......')
  }
}

//-----// POST-categoryS-HERE...
const createCategory = async (request, response) => {
  try {
    const { category_id, category_code, category_name } = request.body
    console.log(request.body);
    const result = await pool.query('INSERT INTO categorys ( category_id, category_code, category_name ) VALUES ($1, $2, $3)', [category_id, category_code, category_name])
    response.status(201).json(result.rows)
  } catch (err) {
    console.log('error......POST')
  }
}

//-----// PUT-categoryS-HERE...
const updateCategory = async (request, response) => {
  try {
    const id = parseInt(request.params.id)
    const { category_code, category_name } = request.body
    const result = await pool.query('UPDATE categorys SET category_code = $1, category_name = $2 WHERE category_id = $3', [category_code, category_name, id])
    response.status(200).json(result.rows)
  } catch {
    console.log('error......PUT')
  }
}

//-----// DELETE-categoryS-HERE...
const deleteCategory = async (request, response) => {
  try {
    const id = parseInt(request.params.id)
    await pool.query('DELETE FROM categorys WHERE category_id = $1', [id])
    response.status(200).send(`Deleted Success ID category: ${id}`)
  } catch {
    console.log('error......DEL')
  }
}

//-----// GET-JWT----------HERE...
const getUsers = async (request, response) => {
  try {
    const { name } = request.query
    console.log("[LOG] JWT GET Users: ", name)
    const result = await pool.query('SELECT * FROM users where LOWER(name) like LOWER($1)', [`%${name ?? ''}%`])
    response.status(200).json(result.rows)
  } catch (err) {
    console.log("[GET] .......error......")
  }
}


//-EXPORT
module.exports = {
  getProducts, createProduct, updateProduct, deleteProduct,
  getCategorys, createCategory, updateCategory, deleteCategory, ascendingProduct, descendingProduct,
  getUsers
}
