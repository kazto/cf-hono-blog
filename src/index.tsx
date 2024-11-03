import { Hono } from 'hono'

const app = new Hono();

app.use('/', async (c, next) => {
  c.setRenderer((content) => {
    return c.html(
      <html>
        <head>Kazto Blog</head>
        <body>{content}</body>
      </html>
    )
  });
  await next();
});

app.get('/', (c) => {
  return c.render("TODO");
})

export default app
