const React = require('react')
const Def = require('../default.jsx')

function index(data) {
  console.log(data);
  let placesFormatted = data.places?.map((place) => {
    return (
      <div className='col-sm-6' key={place.id}>
        <h2>{place.name}</h2>
        <p className='text-center'>
          {place.cuisines}
        </p>
        <img
          src={place.pic}
          alt={place.name}
        />
        <p className='text-center'>
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });

  return (
    <Def>
      <main>
        <h1>Places to Rant About</h1>
       <div className="row">
          {placesFormatted}
       </div>
      </main>
    </Def>
  );
}

module.exports = index