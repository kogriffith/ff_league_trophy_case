import React from 'react'
import {Link,Route} from 'react-router-dom'

const Navbar = () => (
<div>
  <section className = "header">
    <nav className = "header-nav">
      
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/players">Degenerates</Link></li>
        
      </ul>
    </nav>
  </section>
</div>
);

export default Navbar
