const elasticsearch = require("elasticsearch");

const client = new elasticsearch.Client({
  host: "http://localhost:9200",
});

//check connect
client.ping(
  {
    requestTimeout: 3000, //ms
  },
  (err, res, sta) => {
    if (err) {
      return console.error(`Error connect:::`, err);
    }
    console.log(`isOkay::: connect`, res);

    //create index
    client.indices.create(
      {
        index: "player-index2", //tao index như các db khác
      },
      (err, res, sta) => {
        console.log("🚀 ~ file: main.js:24 ~ sta", res)

        //add data
        client.index(
          {
            index: "player-index",
            id: 1,
            type: "player-list",
            body: {
              name: "ronaldo", // tôi yêu Chị Bảy
              age: 35,
              club: "MU",
            },
          },
          (err, res, sta) => {
            console.log("🚀 ~ file: main.js:60 ~ sta", res)

            client.search(
              {
                index: "player-index",
                type: "player-list",
                body: {
                  query: {
                    match: {
                      name: "ronaldo",
                    },
                  },
                },
              },
              (err, res, sta) => {
                console.log("🚀 ~ file: main.js:54 ~ sta", res.hits.hits)
              }
            );
          }
        );
      }
    );
  }
);
