const puppeteer = require('puppeteer');

const printPdf = async (path) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(path, { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({
    format: 'A4',
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px',
    },
  });
  await browser.close();
  return pdf;
};

module.exports = printPdf;
