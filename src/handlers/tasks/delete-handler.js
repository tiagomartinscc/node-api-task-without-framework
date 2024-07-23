import { Database } from '../../database.js'
const database = new Database()

export const deleteHandler = (req, res) => {
  const { id } = req.params

  const task = database.find('tasks', id)
  if(!task) {
    return res.writeHead(404).end()  
  }

  database.delete('tasks', id)

  return res.writeHead(204).end()
}