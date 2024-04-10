const React = require("react");
const Def = require("../default.jsx");

function new_form() {
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>

        <form
          method='POST'
          action='/places'
        >
          <div className='form-group'>
            <label htmlFor='name'>Place Name:</label>
            <input
              className='form-control'
              id='name'
              name='name'
              type='text'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='pic'>Place Picture:</label>
            <input
              className='form-control'
              id='url'
              name='pic'
              type='pic'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='city'>Place City:</label>
            <input
              className='form-control'
              id='city'
              name='city'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='state'>Place State:</label>
            <input
              className='form-control'
              id='state'
              name='state'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='cuisine'>Place Cuisine:</label>
            <input
              className='form-control'
              id='cuisine'
              name='cuisine'
              type='text'
            />
          </div>
          <input
            id='newSubBtn'
            className='btn btn-primary'
            type='submit'
            value='Add Place'
          />
        </form>
      </main>
    </Def>
  );
}

module.exports = new_form;
