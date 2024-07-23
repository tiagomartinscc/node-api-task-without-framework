# API REST Nodejs sem o uso de frameworks

#### Rocketseat Desafio-1

Repositório criado para o desenvolvimento e entrega do desafio da trilha Ignite NodeJS da 💜[Rocketseat](https://www.rocketseat.com.br/)

<img src="https://static-media.hotmart.com/XwXVhvU-opD761WIP7j5O7GT4AU=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/ec16822f-5482-421b-9c12-470cf1c099c8/Group6626.png?w=920" alt="Ignite">

### Tecnologias / Linguagens de programação

- Javascript
- NodeJS
- [CSV Parse](https://csv.js.org/)
- GitHub

## Sobre o desafio

Nesse desafio foi desenvolvido uma API para realizar o CRUD de tarefas.
A API também contém rota para marcar a tarefa com completa e foi desenvolvido uma importação de arquivo CSV

### Instalação

    npm install

### Rodar o servidor

    npm run dev

### Importar CSV
    npm run import

# REST API

A API REST para o aplicativo de exemplo é descrita abaixo.

## Listagem de tarefas

### Request

`GET /tasks/`

    curl --request GET \
      --url http://localhost:3333/tasks \
      --header 'Content-type: application/json'

### Response

    Content-type: application/json
    Date: Mon, 22 Jul 2024 16:10:12 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    Content-Length: 2

    200 Ok
    []

## Criação de tarefa

### Request

`POST /tasks/`

    curl --request POST \
      --url http://localhost:3333/tasks \
      --header 'Content-Type: application/json' \
      --data '{
        "title": "Título da tarefa",
        "description": "Descrição da tarefa"
    }'

### Response

    Content-type: application/json
    Date: Mon, 22 Jul 2024 16:10:12 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    Transfer-Encoding: chunked

    201 Created
    No body returned for response

## Edição de tarefa

### Request

`PUT /tasks/:id`

    curl --request PUT \
      --url http://localhost:3333/tasks/6af00020-dff7-45b2-8f1f-1a42fcccde6c \
      --header 'Content-Type: application/json' \
      --data '{
        "title": "Editar título",
        "description": "Editar descrição"
      }'

### Response

    Content-type: application/json
    Date: Mon, 22 Jul 2024 16:10:12 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    204 No Content
    No body returned for response

## Marcar tarefa como finalizada

### Request

`PATCH /tasks/:id/complete`

    curl --request PATCH \
      --url http://localhost:3333/tasks/6af00020-dff7-45b2-8f1f-1a42fcccde6c/complete

### Response

    Content-type: application/json
    Date: Mon, 22 Jul 2024 16:10:12 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    204 No Content
    No body returned for response


## Exclusão de tarefa

### Request

`DELETE /tasks/:id`

    curl --request DELETE \
      --url http://localhost:3333/tasks/6af00020-dff7-45b2-8f1f-1a42fcccde6c

### Response

    Content-type: application/json
    Date: Mon, 22 Jul 2024 16:10:12 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    204 No Content
    No body returned for response