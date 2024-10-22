import express from "express";

let router = express.Router();

router.get(`/login`, (req: express.Request, res: express.Response) => {
  res.render(`login`, {
    title: `Express Login`,
  });
});

router.post(
  `/login`,
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(`req.body.username : ${req.body.username}`);
  }
);

export { router };
