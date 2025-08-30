export default async function handler(req, res) {
  const { language } = req.query;
  const pdfUrls = {
    en: 'https://portfolio.lucasduport.cc/cvs/CV_EN_2025.pdf',
    fr: 'https://portfolio.lucasduport.cc/cvs/CV_FR_2025.pdf',
  };

  const url = pdfUrls[language];
  if (!url) {
    return res.status(404).end('Language not supported');
  }

  try {
    const response = await fetch(url, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });
    if (!response.ok) {
      return res.status(response.status).end(`Error fetching PDF: ${response.statusText}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.send(buffer);
  } catch (err) {
    console.error('PDF proxy error:', err);
    res.status(500).end('Internal Server Error');
  }
}
