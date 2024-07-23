import { Database } from '../../database.js'
const database = new Database()

export const completeHandler = (req, res) => {
  const { id } = req.params

  const task = database.find('tasks', id)
  if(!task) {
    return res.writeHead(404).end()  
  }

  if (task.completed_at !== null) {
    const error = {error: "the task was already completed"}
    return res.writeHead(400).end(JSON.stringify(error))
  }

  task.completed_at = new Date()
  task.updated_at = new Date()

  console.log(task)

  database.update('tasks', id, task)

  return res.writeHead(204).end()
}