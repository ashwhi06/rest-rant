const React = require('react')
const Def = require('./default')


function home (){
    return (
        <Def> {/*This is the default component that we imported from the default.jsx file.*/}
            <main>
                <h1>HOME</h1>
                <a href="/places"><button className="btn-primary">Places Page</button></a>
            </main>
        </Def>
    )
}

module.exports = home