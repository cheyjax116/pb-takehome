## Getting Started

## local-dev Repo for Docker Container

Pull down the local-dev repo [here](https://github.com/cheyjax116/local-dev) and run commands in README.md file to set up Docker container.

## Preparing Backend for launch

cd into the backend folder and run
`npm migration:run` command to migrate the database and fill the respective tables.

In the `.env-example.txt` file you'll find a template on the enviroment variables used to set-up the server and connect to the local database. You'll want to have those set up in your .env file before launch.

## Start Backend

run the `npm start` command to launch database. If it is succesful you should she the following message:
"Server is pointing at development
🚀 Server ready at http://localhost:8888/graphql
Database Connected"

## GraphQL Sandbox For Database Insertion and Testing

Opening [http://localhost:8888/graphql]http://localhost:8888/graphql in your browser will then allow you to access the Sandbox to test queries and mutations. The insertBook mutation will allow you to insert a book's information into your local database.

## Start Frontend

Once the server is up and running, cd into the frontend folder and run the `npm run dev` command to launch the next.js frontend.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. If your database is empty, You'll see a "Book Shelf Empty" message. Refer to previous step for insertion.

## Demo
