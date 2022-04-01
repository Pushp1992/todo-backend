#  Node.s ToDo Service

This is a Node js Hiring Tournament - Season 1. 

#   Note
- .env file is committed intentionally for this task. We should never committing any env variable

## Required Prerequisites

-   You will need to have node installed in your machine
-   You must have git client installed in your machine.
-   You should also have any SQL/noSQL databse installd in your machine. (e.g MongoDB)
-   If you don't have any of the DB installed, then you can use SQLite too.

### Change to node version v14.15.1
```
nvm use
```

### Install all dependencies for this Tournamanet.

```bash
npm i
```

## Running in development mode

```bash
npm run dev
```

## Note:

-   Running `npm run dev` will eventually start mongoDB and all it's dependency.
-   If you encounter any error related to MongoDB, please refer the attached document below.

### If you want to execute exisitng MongoDB config (optional), run below commands

### Start Mongo DB

```bash
npm run start-db
```

### Stop Mongo DB

```bash
npm run stop-db
```
### Command to run Mongo DB Shell for all your DB operation within

```bash
npm run mongo
```

### Easy documentation to setup MONGO DB on your machine (optional)

<https://docs.mongodb.com/manual/administration/install-community/>
