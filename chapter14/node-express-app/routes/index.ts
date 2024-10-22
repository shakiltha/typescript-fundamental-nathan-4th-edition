import express from "express";
import { SessionData } from "express-session";

let router = express.Router();

router.get(`/`, (req: express.Request, res: express.Response) => {
  res.render("index", {
    title: "Express App",
    welcomeMsg: "Welcome to the Express App",
    username: (<SessionData>req.session).username,
  });
});

export { router };
