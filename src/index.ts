import "dotenv/config";
import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";

const app = express();

const parsedPort = Number(process.env.PORT);
const port = Number.isFinite(parsedPort) ? parsedPort : 3000;

app.get("/", (_req: Request, res: Response, _next: NextFunction) => {
  res.send("<h1>Hi There!!!</h1>");
});

const server = app.listen(port, () =>
  console.log(`The application is listening on the port ${port}.`),
);

let isShuttingDown = false;
const gracefulShutdown = (signal: string): void => {
  if (isShuttingDown) return;
  isShuttingDown = true;
  console.log(`${signal} received. Shutting down gracefully...`);
  server.close((err) => {
    if (err) {
      console.error("Error during shutdown:", err);
      process.exit(1);
    }
    console.log("HTTP server closed.");
    process.exit(0);
  });
  setTimeout(() => {
    console.log("Forced shutdown after timeout.");
    process.exit(1);
  }, 10_000).unref();
};

process.on("SIGTERM", () => {
  gracefulShutdown("SIGTERM");
});
process.on("SIGINT", () => {
  gracefulShutdown("SIGINT");
});
