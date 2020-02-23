const serverless = require("serverless-http");
const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
var router = require("./routes/index");

const qs = require("qs");

const porting = express();
porting.use(cors());

porting.use(bodyParser.json({ limit: "10mb" }));
porting.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

porting.use("/", (req, res, next) => {
  if (req._parsedUrl.search) {
    req.query = qs.parse(req._parsedUrl.search.replace("?", ""), { depth: 10 });
  }
  // req.event = {
  //   requestContext: {
  //     authorizer: { principalId: process.env.PRINCIPAL_ID || "259437003", role: 'User' }
  //   }
  // };
  next();
});

porting.use("/", router);

porting.on("unhandledException", error => {
  console.log("Unhandled Exception: ", error.message);
});

exports.handler = serverless(porting, {
  request: function(req, event, context) {
    req.event = event;
    req.context = context;
  }
});
//  porting.listen(3000);