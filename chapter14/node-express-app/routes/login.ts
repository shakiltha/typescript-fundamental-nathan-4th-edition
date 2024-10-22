import express from "express";

let router = express.Router();

router.get(`/login`, (req: express.Request, res: express.Response) => {
  res.render(`login`, {
    title: `Express Login`,
  });
});

export { router };
