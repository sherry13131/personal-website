const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");

const API_PORT = 3001;
const app = express();
const router = express.Router();

router.get('/sendform', function (req, res) {
    res.send('hello world');
});

router.post('/submit', function(req, res) {
    console.log(req.body);
    res.send("hi2");
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));