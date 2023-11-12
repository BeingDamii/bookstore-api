const { MongoClient } = require("mongodb");

let dbConnection = null;

module.exports = {
  connectDb: (callBack) => {
    MongoClient.connect("mongodb://localhost:27017/bookstore")
      .then((client) => {
        dbConnection = client.db();
        return callBack();
      })
      .catch((error) => {
        console.log("Error connecting: ", error);
        return callBack(error);
      });
  },

  getDb: () => dbConnection,

  closeDb: () => {
    if (dbConnection) {
      dbConnection.close();
    }
  },
};
