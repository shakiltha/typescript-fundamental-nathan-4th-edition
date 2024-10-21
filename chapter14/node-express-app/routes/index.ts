import express from "express";

let router = express.Router();

router.get(`/`, (req: express.Request, res: express.Response) => {
  res.send(`Index module processed ${req.url}`);
});

export { router };
