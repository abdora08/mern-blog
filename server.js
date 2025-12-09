require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

let db;

const client = new MongoClient(process.env.MONGODB_URI);

async function connectDB() {
  try {
    await client.connect();
    db = client.db("mernblog");
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Failed to connect to DB", err);
    process.exit(1);
  }
}

app.get("/api/articles/:name", async (req, res) => {
  try {
    const articleName = req.params.name;
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);
  } catch (error) {
    res.status(500).json({ message: "Error fetching article", error });
  }
});

app.post("/api/articles/:name/add-comments", async (req, res) => {
  try {
    const articleName = req.params.name;
    const { username, text } = req.body;

    await db
      .collection("articles")
      .updateOne(
        { name: articleName },
        { $push: { comments: { username, text } } }
      );

    const updatedArticle = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error });
  }
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
