export default async (req, context) => {
  const apiKey = process.env.KINOPOISK_API_KEY

  const allowedOrigins = [
    'https://daryatash.github.io',
    'http://localhost:5173'
  ]
  const origin = req.headers.get('origin')
  const corsOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0]
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': corsOrigin,
  }

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'KINOPOISK_API_KEY не настроен' }), {
      status: 500,
      headers: headers
    })
  }

  const url = new URL(req.url)
  const apiPath = url.pathname.replace('/.netlify/functions/kinopoisk', '')
  const targetUrl = `https://kinopoiskapiunofficial.tech${apiPath}${url.search}`

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: headers
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Proxy error' }), {
      status: 500,
      headers: headers,
    })
  }
}