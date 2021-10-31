import React from 'react'
import { Users } from './Users'

export const NavBar = () => {
  const [showusers, setshowusers] = React.useState(false)
  const [data, setdata] = React.useState([])

  function GetUsers() {
    console.log("clicked")
    fetch('https://randomuser.me/api/?results=8&inc=name,location,email,dob,cell,picture&nat=us')
      .then(function (result) { return result.json(); })
      .then(function (result) {
        const itemss = result;
        setdata(itemss)
        console.log("aksks" + data)
        setshowusers(true)

      })

  }

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="http://freehtmldesign.com">Lets Grow More</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#showNavbar" aria-controls="showNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="showNavbar">
          <button className="btn btn-light btn-sm" href="https://ko-fi.com/ariecupu" onClick={() => GetUsers()} target="_blank" role="button"><i className="fa fa-user" /> Show Users</button>
        </div>{/* /.collapse */}
      </nav>
      {showusers ? <Users userlist={data} /> : null}
    </div>
  )
}
