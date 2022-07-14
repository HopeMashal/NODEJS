const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://<name>:<password>@cluster0.uyefr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MongoClient.connect(
  uri,
  { useUnifiedTopology: true },
  async (error, client) => {
    if (error) {
      return console.log("can't connect");
    }
    console.log("connected correctly");

    const db = client.db("blogData");
    try {
      //! email needs to be unique
      db.collection("users").createIndex({ email: 1 }, { unique: true });
      await db.collection("users").insertMany([
        { name: "Hope", email: "hope@gmail.com" },
        { name: "Yuki", email: "yuki@gmail.com" },
      ]);

      //! The first post
      const post = {
        title: "My first post",
        text: "I'm so excited to post here",
        tags: ["first", "excited"],
      };
      const userPost = await db
        .collection("users")
        .findOne({ email: "hope@gmail.com" });
      await db.collection("posts").insertOne({
        myId: 1,
        title: post.title,
        text: post.text,
        tags: post.tags,
        comments: [],
        ownerID: userPost._id,
        ownerName: userPost.name
      });
      const comment = { text: "Fantastic post!" };
      const userComment = await db
        .collection("users")
        .findOne({ email: "yuki@gmail.com" });
      await db.collection("posts").updateOne(
        { myId: 1 },
        {
          $push: { comments: { text: comment.text, ownerID: userComment._id, ownerName:userComment.name } },
        }
      );

      //! The second post
      const post1 = {
        title: "My first post, Yuki",
        text: "I'm so excited to post here",
        tags: ["first", "excited"],
      };
      const userPost1 = await db
        .collection("users")
        .findOne({ email: "yuki@gmail.com" });
      await db.collection("posts").insertOne({
        myId: 2,
        title: post1.title,
        text: post1.text,
        tags: post1.tags,
        comments: [],
        ownerID: userPost1._id,
        ownerName: userPost1.name
      });
      const comment1 = { text: "Amazing post!" };
      const userComment1 = await db
        .collection("users")
        .findOne({ email: "hope@gmail.com" });
      await db.collection("posts").updateOne(
        { myId: 2 },
        {
          $push: { comments: { text: comment1.text, ownerID: userComment1._id, ownerName:userComment1.name } },
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
);