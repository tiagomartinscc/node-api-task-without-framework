import { randomUUID } from 'node:crypto'
import { Database } from '../../database.js'
const database = new Database()

export const createHandler = (req, res) => {
  const error = {error: ""}

  if(req.body === null) {
    error.error = "title and description are required"
    return res.writeHead(400).end(JSON.stringify(error))
  }

  if (!req.body.title) {
    error.error = "title is required"
    return res.writeHead(400).end(JSON.stringify(error))
  }

  if (!req.body.description) {
    error.error = "description is required"
    return res.writeHead(400).end(JSON.stringify(error))
  }

  const { title, description } = req.body

  const task = {
    id: randomUUID(),
    title,
    description,
    completed_at: null,
    created_at: new Date(),
    updated_at: null
  }

  database.insert('tasks', task)

  return res.writeHead(201).end()
}