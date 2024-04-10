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
          <div>
            <label htmlFor='name'>Place Name:</label>
            <input
              id='name'
              name='name'
              type='text'
              required
            />
          </div>
          <div>
            <label htmlFor='pic'>Place Picture:</label>
            <input
              id='url'
              name='pic'
              type='pic'
            />
          </div>
          <div>
            <label htmlFor='city'>Place City:</label>
            <input
              id='city'
              name='city'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='state'>Place State:</label>
            <input
              id='state'
              name='state'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='cuisine'>Place Cuisine:</label>
            <input
              id='cuisine'
              name='cuisine'
              type='text'
            />
          </div>
          <div class="newSubBtn">
            <input
              type='submit'
              value='Add Place'
            />
          </div>
        </form>
      </main>
    </Def>
  );
}

module.exports = new_form;
