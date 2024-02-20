const Reader = require("./entities/Reader");
const Processor = require("./entities/Processor");
const Table = require("./entities/Table");
const HtmlParser = require("./entities/HtmlParser");
const Writer = require("./entities/Writer");
const PdfWriter = require("./entities/PdfWriter");

const reader = new Reader();
const writer = new Writer();

async function main() {
  const data = await reader.read("./users.csv");
  const processedData = Processor.process(data);

  const tableData = new Table(processedData);

  const html = await HtmlParser.parse(tableData);

  writer.write(Date.now()+".html", html);
  PdfWriter.writePdf(Date.now() + ".pdf", html);
}

main();
