

# Movie Review REST API

This project is a simple **REST API** for managing movies and their reviews. It allows users to create, read, update, and delete movie records, as well as add reviews for specific movies.

## Table of Contents

- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Running the Project](#running-the-project)
- [Testing the API](#testing-the-api)

## Usage

After installing the dependencies, you can run the API on your local machine.

1. Start the server:

   ```bash
   node app.js
   ```

   Or, if you're using **nodemon** for auto-reload:

   ```bash
   nodemon app.js
   ```

2. The server will start running at `http://localhost:3000/`.

## API Endpoints

Here is a list of available API endpoints:

### Movies

- **GET /movies**
  - Retrieve the list of all movies.
  - **Example:**
    ```bash
    GET http://localhost:3000/movies
    ```
  
- **GET /movies/:id**
  - Retrieve details of a specific movie by its ID.
  - **Example:**
    ```bash
    GET http://localhost:3000/movies/1
    ```

- **POST /movies**
  - Add a new movie.
  - **Request Body (JSON):**
    ```json
    {
      "title": "The Dark Knight",
      "director": "Christopher Nolan"
    }
    ```
  - **Example:**
    ```bash
    POST http://localhost:3000/movies
    ```

- **PUT /movies/:id**
  - Update a specific movie by its ID.
  - **Request Body (JSON):**
    ```json
    {
      "title": "Updated Title",
      "director": "Updated Director"
    }
    ```
  - **Example:**
    ```bash
    PUT http://localhost:3000/movies/1
    ```

- **DELETE /movies/:id**
  - Delete a specific movie by its ID.
  - **Example:**
    ```bash
    DELETE http://localhost:3000/movies/1
    ```

### Reviews

- **POST /movies/:id/reviews**
  - Add a review to a specific movie.
  - **Request Body (JSON):**
    ```json
    {
      "reviewer": "John Doe",
      "comment": "Great movie!"
    }
    ```
  - **Example:**
    ```bash
    POST http://localhost:3000/movies/1/reviews
    ```

- **DELETE /movies/:id/reviews/:reviewer**
  - Delete a specific review for a movie.
  - **Example:**
    ```bash
    DELETE http://localhost:3000/movies/1/reviews/John%20Doe
    ```

## Running the Project

1. Make sure you have **Node.js** installed on your machine. If not, download and install it from [Node.js](https://nodejs.org/).
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
   node app.js
   ```

4. The API will run on `http://localhost:3000/`.

### Running with `nodemon` (Optional)

`nodemon` automatically restarts your server when file changes are detected.

- Install `nodemon` globally:

  ```bash
  npm install -g nodemon
  ```

- Run the server with `nodemon`:

  ```bash
  nodemon app.js
  ```

## Testing the API

You can test the API using tools like **Postman**, **curl**, or directly from your browser for `GET` requests.

### Example using `curl`:

- **Get all movies**:
  
  ```bash
  curl -X GET http://localhost:3000/movies
  ```

- **Add a new movie**:

  ```bash
  curl -X POST http://localhost:3000/movies -H "Content-Type: application/json" -d '{"title":"Inception","director":"Christopher Nolan"}'
  ```

- **Add a review to a movie**:

  ```bash
  curl -X POST http://localhost:3000/movies/1/reviews -H "Content-Type: application/json" -d '{"reviewer":"John Doe","comment":"Great movie!"}'
  ```

