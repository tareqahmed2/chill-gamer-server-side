const express = require("express");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    // await client.connect();
    const ratedCollection = client.db("ratedDB").collection("rated");
    const userCollection = client.db("ratedDB").collection("users");
    const trendingCollection = client.db("ratedDB").collection("trending");
    const reviewCollection = client.db("ratedDB").collection("reviews");
    const watchListCollection = client.db("ratedDB").collection("watchList");
    const upcomingCollection = client.db("ratedDB").collection("upcoming");
    const developersCollection = client.db("ratedDB").collection("developers");
    // await client.db("admin").command({ ping: 1 });
    app.get("/highRated", async (req, res) => {
      const cursor = ratedCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/highRatedCardDetails/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await ratedCollection.findOne(query);
      res.send(result);
    });
    app.get("/developers", async (req, res) => {
      const cursor = developersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/trending", async (req, res) => {
      const cursor = trendingCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.post("/reviews", async (req, res) => {
      const newReview = req.body;
      const result = await reviewCollection.insertOne(newReview);
      res.send(result);
    });
    app.get("/reviews", async (req, res) => {
      const cursor = reviewCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    // upcoming
    app.get("/upcoming", async (req, res) => {
      const cursor = upcomingCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/reviews", async (req, res) => {
      const cursor = reviewCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/reviews/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };

      const result = await reviewCollection.findOne(query);
      res.send(result);
    });
    app.post("/watchList", async (req, res) => {
      const newWatchList = req.body;
      const result = await watchListCollection.insertOne(newWatchList);
      res.send(result);
    });
    app.get("/watchList/:email", async (req, res) => {
      const userEmail = req.params.email;
      const result = await watchListCollection
        .find({
          userEmail: userEmail,
        })
        .toArray();
      res.send(result);
    });
    app.get("/myReviews/:email", async (req, res) => {
      const userEmail = req.params.email;
      const result = await reviewCollection
        .find({ email: userEmail })
        .toArray();
      res.send(result);
    });
    app.put("/updateReview/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedReview = req.body;
      const review = {
        $set: {
          cover: updatedReview.cover,
          title: updatedReview.title,
          desc: updatedReview.desc,
          rating: updatedReview.rating,
          publishingYear: updatedReview.publishingYear,
          genre: updatedReview.genre,
          email: updatedReview.email,
        },
      };
      const result = await reviewCollection.updateOne(filter, review, options);
      res.send(result);
    });
    app.delete("/deleteReview/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await reviewCollection.deleteOne(query);
      res.send(result);
    });

    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`assignment is getting warmer in port: ${port}`);
});
