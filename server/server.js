import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.json(`Root of the route. Route of the root?`);
});

app.get("/posts", (request, response) => {
  response.json({ post: "this post has some text in it" });
});

app.listen("3001", () => {
  console.log("Server is running on Port 3001");
});
