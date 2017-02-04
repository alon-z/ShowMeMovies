var HTMLParser = require('fast-html-parser');

export function testParse() {
  return fetch("http://www.yesplanet.co.il/loadFunction?layoutId=10&layerId=1&exportCode=movies_filter")
    .then((respone) => {
      var html = HTMLParser.parse(respone);
      html.querySelectorAll('.featureItem');
    });
}
