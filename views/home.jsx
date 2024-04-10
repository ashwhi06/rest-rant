const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      {" "}
      {/*This is the default component that we imported from the default.jsx file.*/}
      <main>
        <h1>REST-rant</h1>
        <div>
          <img
            src={`${"/images/watermelon-drink.jpg"}`}
            alt='Watermelon drink'
          />
        </div>
        <div>
          Photo by:{" "}
          <a href='https://unsplash.com/photos/sliced-watermelon-with-lemon-on-shot-glass-XoN3v3Ge7EE'>
            ShengGeng Lin
          </a>{" "}
          on <a href='https://unsplash.com'>Unsplash</a>
        </div>
        <a href='/places'>
          <button className='btn-primary'>Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
