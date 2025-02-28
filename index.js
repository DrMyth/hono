import { Hono } from 'hono'

const app = new Hono();

app.get('/', (c) => c.text('Hello, Cloudflare Workers! hi ==========asdfadgsh='));
app.get('/api', (c) => c.json({ message: 'Hono is awesome! hello there *========*' }))
app.get('/gt', (c) => c.json({ message: 'BBALLLASFA HFAODFSDgf sda' }))

export default app
