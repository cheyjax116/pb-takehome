## Book Stats Tracker Takehome Set Up

## Pull local-dev Repo for Docker Container

Pull down the local-dev repo [here](https://github.com/cheyjax116/local-dev) and run commands in README.md file to set up Docker container.

## Prepare Backend for Launch

From within the pb-takehome repo, cd into the backend folder and run
`npm run migration:run` command to migrate the database schema.

In the `.env-example.txt` file you'll find a template of the environment variables used to set-up the server and connect to the local database. You'll want to have those set up in your `.env` file before launch.

## Start Backend

run  `npm start` command to launch database. If it is succesful you should see the following message:
```
Server is pointing at development
🚀 Server ready at http://localhost:8888/graphql
Database Connected
```

## GraphQL Sandbox For Database Insertion and Testing

Opening [http://localhost:8888/graphql](http://localhost:8888/graphql) in your browser will then allow you to access the Apollo Sandbox to test queries and mutations. The `insertBook` mutation will allow you to insert a book's information into your local database.

## Start Frontend

Once the server is up and running, cd into the frontend folder and run `npm run dev` command to launch the next.js frontend.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. If your database is empty, You'll see a "Book Shelf Empty" message. Refer to previous step for database insertion.

## Demo

![Book Tracker App Demo](https://github.com/cheyjax116/pb-takehome/assets/77046115/e55b9de7-392a-4acc-85ac-165389c63f4f)
