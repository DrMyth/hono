import { Hono } from 'hono'

const app = new Hono();

app.get('/', (c) => c.text('Hello, Cloudflare Workers! hi hello from me varun'));
app.get('/api', (c) => c.json({ message: 'Hono is awesome! hello there' }))

export default app
