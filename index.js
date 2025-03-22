import { Hono } from 'hono'
import dotenv from 'dotenv'
dotenv.config();

const app = new Hono()

app.get('/', (c) => c.text(`Hello, Cloudflare Workers! hi ${process.env.VAR1}`));
app.get('/api', (c) => c.json({ message: 'Hono is awesome! hello there *========*' }))
app.get('/gt', (c) => c.json({ message: 'BBALLLASFA HFAODFSDgf sda' }))

export default app
