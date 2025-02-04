import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>2025 Bugs and Stuff</p>
        <nav className="footer-nav">
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
        </nav>
      </div>
      <img
        src="https://images.unsplash.com/photo-1597040827713-24d4c7e4b0e2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JlZW4lMjBncmFzc3xlbnwwfHwwfHx8MA%3D%3D"
        alt=""
        className="footer-image"
      />
    </footer>
  )
}

export default Footer
