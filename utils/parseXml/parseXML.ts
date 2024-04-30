const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");

export default function extractUrlsFromRSS(xmlString: string): PostFromXml[] {
    const parser = new XMLParser({
    });
    let result = parser.parse(xmlString, true);
    return result.rss.channel.item;
}