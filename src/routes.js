import { buildRoutePath } from './utils/build-route-path.js'

import { listHandler } from './handlers/tasks/list-handler.js'
import { createHandler } from './handlers/tasks/create-handler.js'
import { updateHandler } from './handlers/tasks/update-handler.js'
import { deleteHandler } from './handlers/tasks/delete-handler.js'
import { completeHandler } from './handlers/tasks/complete-handler.js'

// - `id` - Identificador único de cada task
// - `title` - Título da task
// - `description` - Descrição detalhada da task
// - `completed_at` - Data de quando a task foi concluída. O valor inicial deve ser `null`
// - `created_at` - Data de quando a task foi criada.
// - `updated_at` - Deve ser sempre alterado para a data de quando a task foi atualizada.

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => listHandler(req, res)
  },
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => createHandler(req, res)
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => updateHandler(req, res)
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => deleteHandler(req, res)
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (req, res) => completeHandler(req, res)
  }
]