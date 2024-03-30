const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry! The page you are looking for does not exist.</p>
        <div>
          <img
            src={`${"/images/404-error.jpg"}`}
            alt=''
          />
        </div>
        <div>
          Photo by:{" "}
          <a href='https://unsplash.com/photos/a-broken-cell-phone-with-the-word-error-on-it-Fi_nhg5itCw'>
            Kostiantyn Li
          </a>{" "}
          on <a href='https://unsplash.com'>Unsplash</a>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
