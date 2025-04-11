import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text(`Hello, Cloudflare Workers! hi ${c.env.VAR1} Updated V1`))
app.get('/api', (c) => c.json({ message: `Hono is awesome! hello there *========* ${c.env.VAR2} Updated V1` }))
app.get('/gt', (c) => c.json({ message: `BBALLLASFA HFAODFSDgf sda ${c.env.VAR3} Updated V1` }))
app.get('/env', (c) => {
  return c.json({ env: c.env })
})

export default app
