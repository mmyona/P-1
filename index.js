// express server
const express = require("express");
const path = require("path");

// express 사용
const app = express();

app.use(express.static(__dirname+"/public"));

app.get("/*", (req, res) => {
    res.sendFile(__dirname+"index.html");
});

// port 생성 서버 실행
app.listen(process.env.PORT || 3000, () => console.log("Server running ....")) 