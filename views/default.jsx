const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
        <title>Title</title>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css'
        />
        <link
          rel='stylesheet'
          href='/css/styles.css'
        />
      </head>
      <body>{html.children}</body>
    </html>
  );
}

module.exports = Def;
