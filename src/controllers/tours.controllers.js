
import {pool} from '../db.js'


/*export const getTours1 = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM tours')
    res.json(rows)
}*/

export const getTours = async (req, res) => {
    
    try {
      const [rows] = await pool.query('SELECT * FROM tours WHERE id = ?', [req.params.id])
    
    if (rows.length <= 0) return res.status(404).json ({
        message: 'Tour not found'
    })
    res.json(rows[0])
    } catch (error) {
      return res.status(500).json({
        message: 'Something goes wrong'
      })
    }
}

export const createTour = async (req, res) => {
   try {
    const {name, price} = req.body
    const [rows] = await pool.query('INSERT INTO tours (name, price) VALUES (?, ?)',[name, price])
   res.send({
    id: rows.insertId,
    name,
    price,
   })
   } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
   }
}

export const deleteTour = async (req, res) => {
   try {
    const [result] = await pool.query('DELETE FROM tours WHERE id = ?', [req.params.id])

    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Tour not found'
    })

   res.sendStatus(204)
   } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
   }
}

export const updateTour = async (req, res) => {
    try {
      const {id} = req.params
    const {name, price} = req.body
    
    const [result] = await pool.query('UPDATE tours SET name = IFNULL(?, name), price = ? WHERE id = ?', [name, price, id])

    if (result.affectedRows === 0) return res.status(404).json({
        message: 'Tour not found'
    })
    
    const [rows] = await pool.query('SELECT * FROM tours WHERE id = ?', [id])

    res.json(rows[0])
    } catch (error) {
      return res.status(500).json({
        message: 'Something goes wrong'
      })
    }
}

 