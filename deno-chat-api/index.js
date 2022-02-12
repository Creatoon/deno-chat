import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const messages = [];
// books.set("1", {
//   id: "1",
//   title: "The Hound of the Baskervilles",
//   author: "Conan Doyle, Arthur",
// });

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Chat server!";
  })
  .get("/messages", (context) => {
    context.response.body = messages;
  })
  .post("/messages", async(context) => {
    const message = await context.request.body().value;
    messages.push(message);
    context.response.body = messages;
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });