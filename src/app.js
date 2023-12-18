const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const connectionUrl = "mongodb://127.0.0.1:27017";
const dbName = "Data-Center";

mongoClient.connect(connectionUrl, (error, result) => {
  if (error) {
    return console.log("ERROR!!!");
  }
  console.log("ALL GOOD");

  const db = result.db(dbName);

  db.collection("users").insertOne(
    {
      name: "yousef",
      age: 19,
    },
    (error, data) => {
      if (error) {
        console.log(error);
      }
      console.log(data.insertedId);
    }
  );

  db.collection("users").insertMany(
    [
      {
        name: "amr",
        age: 20,
      },
      {
        name: "atef",
        age: 21,
      },
      {
        name: "kamel",
        age: 22,
      },
      {
        name: "ali",
        age: 23,
      },
      {
        name: "ahemd",
        age: 27,
      },
      {
        name: "mohamed",
        age: 27,
      },
      {
        name: "mostafa",
        age: 27,
      },
      {
        name: "zeyad",
        age: 27,
      },
      {
        name: "ibrahim",
        age: 27,
      },
      {
        name: "osama",
        age: 28,
      },
    ],
    (error, data) => {
      if (error) {
        console.log("Unable to insert data");
      }
      console.log(data.insertedCount);
    }
  );

  db.collection("users")
    .find({ age: 27 })
    .toArray((error, users) => {
      if (error) {
        return console.log(error);
      }
      console.log(users);
    });

  db.collection("users")
    .find({ age: 27 })
    .limit(3)
    .toArray((error, users) => {
      if (error) {
        return console.log(error);
      }
      console.log(users);
    });

  db.collection("users")
    .updateMany(
      {},
      {
        $set: { name: "rana" },
        $set: { name: "hannen" },
        $set: { name: "fatma" },
        $set: { name: "alia" },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => console.log(error));

  db.collection("users")
    .updateMany(
      {},
      {
        $inc: { age: 10 },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => console.log(error));

  db.collection("users")
    .deleteMany({ age: 44 })
    .then((data1) => {
      console.log(data1.deletedCount);
    })
    .catch((error) => console.log(error));
});
