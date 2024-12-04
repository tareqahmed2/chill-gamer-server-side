const express = require("express");

const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
const uri =
  //   "mongodb+srv://assignment-10:MetKgh4THV7slZ1W@cluster0.0sbt0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0sbt0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const ratedCollection = client.db("ratedDB").collection("rated");
    const userCollection = client.db("ratedDB").collection("users");
    const trendingCollection = client.db("ratedDB").collection("trending");

    await client.db("admin").command({ ping: 1 });
    app.get("/", async (req, res) => {
      const cursor = ratedCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/trending", async (req, res) => {
      const cursor = trendingCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`assignment is getting warmer in port: ${port}`);
});
