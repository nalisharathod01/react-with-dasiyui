import React from 'react'

const Card = ({img, authorName}) => {
  return (
    <div>
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={img} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{authorName}</h2>
    </div>
  </div>
  </div>
  )
}

export default Card