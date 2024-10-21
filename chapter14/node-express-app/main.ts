import express from "express";

let app = express();

import * as Index from "./routes/index";
import * as Login from "./routes/login";

app.use(`/`, Index.router);
app.use(`/`, Login.router);

app.listen(3001, () => {
  console.log(`listening on port 3001`);
});

import config from "config";

enum ConfigOptions {
  PORT = "port",
}

let port = 3001;

if (config.has(ConfigOptions.PORT)) {
  port = config.get(ConfigOptions.PORT);
} else {
  console.log(`no port config found, using default ${port}`);
}

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
