import { pool } from '../database.js';

export const getEmployee = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({message: 'Algo salió mal'})
    }
   
}

export const getEmployeeById = async (req, res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
    
    if(rows.length <=0) return res.status(404).json({message: 'Empleado no encontrado'})

    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({message: 'Algo salió mal'})
    }
}

export const createEmployee =  async (req,res) => {
    try {
        const [rows] = await pool.query('INSERT INTO employee(nombre_apellido, domicilio, sector, cargo, usuario, clave) VALUES (?,?,?,?,?,?)', 
    [nombre_apellido, domicilio, sector, cargo, usuario, clave])
    console.log(req.body)
    res.send({rows})
    } catch (error) {
        return res.status(500).json({message: 'Algo salió mal'}) 
    }
}

export const updateEmployee = async (req,res) => {
    const {id} = req.params
    const {nombre_apellido,domicilio,sector,cargo,usuario,clave} = req.body
    try {
        const [result] = await pool.query('UPDATE employee SET nombre_apellido = IFNULL(?,nombre_apellido), domicilio=IFNULL(?,domicilio), sector=IFNULL(?,sector), cargo=IFNULL(?,cargo), usuario=IFNULL(?,usuario), clave=IFNULL(?,clave) WHERE id=?',
    [nombre_apellido, domicilio, sector, cargo, usuario, clave,id])

    if(result.affectedRows === 0) return res.status(404).json({message: 'Empleado no encontrado'})
    
    const [rows] = await pool.query('SELECT * FROM employee WHERE id=?', [id])
    
    res.json(rows)
    } catch (error) {
        return res.status(500).json({message: 'Algo salió mal'}) 
    }
    
}

export const deleteEmployee = async(req,res) => {
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id=?', [req.params.id] )
    if(result.affectedRows <=0) return res.status(404).json({message: 'Empleado no encontrado'})
    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: 'Algo salió mal'})
    }
    
}