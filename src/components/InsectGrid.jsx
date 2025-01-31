import React from 'react'
import InsectTile from './InsectTile'

const InsectGrid = ({ insects }) => {
  return (
    <main>
      <div className="insect-grid">
        {insects.map((insect, index) => (
          <InsectTile key={index} insect={insect} />
        ))}
      </div>
    </main>
  )
}

export default InsectGrid
