# Bookstore API

Welcome to the Bookstore API! This simple Node.js API allows you to manage a bookstore by providing endpoints for retrieving, adding, updating, and deleting books.

## Getting Started

### Prerequisites

Make sure you have Node.js and MongoDB installed on your machine.

### Installation

1. Clone this repository.
   ```bash
   git clone https://github.com/BeingDamii/bookstore-api.git
   cd bookstore-api
   
2. Install dependencies.
   npm install
   Your server will be running at http://localhost:3000.


##API Endpoints

1. Welcome
URL: /
Method: GET
Description: Get a welcome message.
Example: http://localhost:3000/
2. Get All Books
URL: /api/books
Method: GET
Description: Get a list of all books sorted by author.
Example: http://localhost:3000/api/books
3. Get a Book by ID
URL: /api/books/:id
Method: GET
Description: Get a specific book by its ID.
Example: http://localhost:3000/api/books/123456
4. Add a Book
URL: /api/books/add
Method: POST
Description: Add a new book.
Example: http://localhost:3000/api/books/add
5. Delete a Book
URL: /api/books/:id
Method: DELETE
Description: Delete a book by its ID.
Example: http://localhost:3000/api/books/123456
6. Update a Book
URL: /api/books/:id
Method: PATCH
Description: Update a book by its ID.
Example: http://localhost:3000/api/books/123456
Database
This API uses MongoDB as its database. Ensure that you have a running MongoDB instance and update the database connection details in the db.js file.

Troubleshooting
If you encounter any issues or have questions, feel free to open an issue.
