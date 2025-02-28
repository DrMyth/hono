import { Hono } from 'hono'

const app = new Hono();

app.get('/', (c) => c.text('Hello, Cloudflare Workers!'))
app.get('/api', (c) => c.json({ message: 'Hono is awesome!' }))

export default app
