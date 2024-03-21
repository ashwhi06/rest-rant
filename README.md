# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
You will need to have the following installed:

- Node.js
- npm

## Installing
Follow these steps to get the project up and running:

### Clone the repository

- git clone https://github.com/yourusername/myproject.git



## Install dependencies

- npm install


### Start the development server

- npm run dev

The server will start on port 3000. Go to http://localhost:3000 to view it in your browser.

### Route Table


| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET | / | Home page |
| GET | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET | * | 404 page (matches any route not defined above) |



### Usage
This project can be used as a starting point to...

Add more detailed usage and examples here.

### Running Tests
To run automated tests for this system, run:

- npm run test


## Deployment
Add additional notes about how to deploy this on a live system.

### Built With
- Node.js - Runtime environment
- React - Front-end framework
- Express - Backend framework

## Contributing
Please read CONTRIBUTING.md for contribution guidelines.

## Versioning
We use SemVer for versioning. For the available versions, see the tags on this repository.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

