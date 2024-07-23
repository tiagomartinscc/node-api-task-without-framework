import { Database } from '../../database.js'
const database = new Database()

export const listHandler = (req, res) => {
  const { search } = req.query

  const tasks = database.select('tasks', search ? {
    title: search,
    description: search
  } : null)

  return res.end(JSON.stringify(tasks))
}