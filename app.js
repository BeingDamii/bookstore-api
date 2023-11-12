const express = require("express");
const { ObjectId } = require("mongodb");
const { connectDb, getDb } = require("./db");

// app init and middleware
const app = express();
app.use(express.json());

// connect db
let db;
connectDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    });
    db = getDb();
  }
});

// routes

app.get("/", (req, res) => {
  res.json({ message: "welcome to my bookstore api" });
});

// get books
app.get("/api/books", async (req, res) => {
  try {
    const books = await db
      .collection("books")
      .find()
      .sort({ author: 1 })
      .toArray();
    res.send(books);
  } catch (err) {
    res.status(400).json({ error: "could not fetch the documents" });
  }
});

// get a book

app.get("/api/books/:id", async (req, res) => {
  try {
    const book = await db
      .collection("books")
      .findOne({ _id: new ObjectId(req.params.id) });
    res.send(book);
  } catch (err) {
    res.status(400).json({ error: "could not fetch the book" });
  }
});

// Add a book

app.post("/api/books/add", async (req, res) => {
  const data = req.body;
  try {
    const book = await db.collection("books").insertOne(data);
    res.json(book);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(400).json({ error: err.message }); // Send a more specific error message
  }
});

// Delete a book

app.delete("/api/books/:id", async (req, res) => {
  try {
    const book = await db
      .collection("books")
      .deleteOne({ _id: new ObjectId(req.params.id) });
    res.json(book);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(400).json({ error: err.message }); // Send a more specific error message
  }
});

// update a book

app.patch("/api/books/:id", async (req, res) => {
  const updatedBook = req.body;
  try {
    const book = await db
      .collection("books")
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updatedBook });
    res.json(book);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

// app.patch("/api/books/:id", async (req, res) => {
//   const updatedBook = req.body;
//   try {
//     const result = await db.collection("books").findOneAndUpdate(
//       { _id: new ObjectId(req.params.id) },
//       { $set: updatedBook },
//       { returnDocument: "after" } // This option returns the updated document
//     );

//     // Extract the updated document from the result
//     const updatedDocument = result.value;

//     res.json(updatedDocument);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ error: err.message });
//   }
// });
