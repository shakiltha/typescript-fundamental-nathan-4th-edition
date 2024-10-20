import express from "express";

let router = express.Router();

router.get(`/`, (req: express.Request, res: express.Response) => {
  res.render("index", {
    title: "Express App",
    welcomeMsg: "Welcome to the Express App",
  });
});

export { router };
