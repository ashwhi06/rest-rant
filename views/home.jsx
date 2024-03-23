const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      {" "}
      {/*This is the default component that we imported from the default.jsx file.*/}
      <main>
        <h1>HOME</h1>
        <div>
          <img
            src='https://images.pexels.com/photos/4587958/pexels-photo-4587958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='H-Thai-ML'
          />
        </div>
        <div>
          Photo by: <a href='AUTHOR_LINK'>Brenda Godinez</a> on{" "}
          <a href='UNSPLASH_LINK'>Unsplash</a>
        </div>
        <a href='/places'>
          <button className='btn-primary'>Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
