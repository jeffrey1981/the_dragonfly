import React from 'react'

const InsectTile = ({ insect }) => {
  return (
    <div className="insect-tile">
      <img src={insect.image} alt={insect.name} />
      <h2>{insect.name}</h2>
      <p>
        <em>{insect.scientific_name}</em>
      </p>
      <p>Origin: {insect.origin}</p>
      <ul>
        {insect.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  )
}

export default InsectTile
