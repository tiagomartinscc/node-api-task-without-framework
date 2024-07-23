import { Database } from '../../database.js'
const database = new Database()

export const updateHandler = (req, res) => {
  const { id } = req.params
  const { title, description } = req.body

  const task = database.find('tasks', id)
  if(!task) {
    return res.writeHead(404).end()  
  }

  if (task.title !== title) {
    task.title = title
  }

  if (task.description !== description) {
    task.description = description
  }

  task.updated_at = new Date()

  database.update('tasks', id, task)

  return res.writeHead(204).end()
}