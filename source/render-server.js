const fs = require("fs");
const path = require("path");
const templater = require("./libs/templater.js");
// const printPdf = require("./libs/printPdf.js");

const outputPath = path.resolve("./");

const pages = [
  {
    title: "index",
    index: path.resolve("./html/index.html"),
    template: path.resolve("./templates/main.js"),
    data: path.resolve("./content/_data.js"),
    pdf: path.resolve("./000.pdf")
  }
];

function doesFileExist(filePath) {
  try {
    fs.statSync(filePath);
    return true;
  } catch (error) {
    return false;
  }
}

pages.forEach(async page => {
  const index = fs.readFileSync(page.index, "utf-8");
  const template = require(page.template);
  const data = require(page.data);
  const outputHtmlFilePath = path.resolve(outputPath, `${page.title}.html`);
  const outputPdfFilePath = page.pdf;

  // HTML
  try {
    if (doesFileExist(outputHtmlFilePath)) {
      fs.unlinkSync(outputHtmlFilePath);
    }

    const htmlData = templater(template)(data);
    const htmlPage = index.replace(/id="app">/, `$&${htmlData}`);
    fs.writeFileSync(outputHtmlFilePath, htmlPage);

    console.log(`${page.title} succesfully created an HTML`);
  } catch (error) {
    console.log("Error generating HTML", error);
  }

  // PDF
  // try {
  //   if (page.pdf && doesFileExist(outputPdfFilePath)) {
  //     fs.unlinkSync(outputPdfFilePath);
  //   }

  //   const pdfPage = await printPdf(outputHtmlFilePath);
  //   fs.writeFileSync(outputPdfFilePath, pdfPage);

  //   console.log(`${page.title} succesfully created an PDF`);
  // } catch (error) {
  //   console.log('Error generating PDF', error);
  // }
});
