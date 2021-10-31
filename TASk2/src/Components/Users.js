import React from 'react'

export const Users = (props) => {
   
    console.log(props)
    const [data, setdata] = React.useState([props.userlist.results])
    console.log("ty",data)
   
    
    return (
        <div>
  <div className="container">
    <div className="koolui-ucard-ji01">
      <div className="row">
      {
                            data[0].map((data) =>
        <div className="col-lg-3 col-md-6" style={{padding:6}}>
          <div className="item">
            <div className="item__badge">{data.dob.age}</div>
            <div className="item__media">
              <img src={data.picture.medium} alt="Image" />
            </div>
            <div className="item__heading">
              <h3>{data.name.first}</h3>
              <small>{data.cell}</small>
            </div>
            <button className="btn btn-primary btn-block text-uppercase">View Profile</button>
          </div>
        </div>
                              )} 
      </div>
    </div>
  </div>
</div>
    )
}
