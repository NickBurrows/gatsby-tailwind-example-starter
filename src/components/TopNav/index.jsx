import React, { useState } from 'react';
import Logo from '../../images/gatsby-icon.png';

const TopNav = (props) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <a className="navbar-brand text-info font-weight-bolder" href="/">
        <img src={Logo} alt="Logo" width="36" height="36" className="vertical-align-middle" />
        <span className="">Discounter</span>
      </a>
      <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
        <a className="nav-link text-info" href="/contact">Support</a>
        <a className="nav-link text-info" href="/login">Login</a>
        <a href="/request-demo" className="btn btn-sm btn-info nav-link text-white" >Request demo</a>
      </div>
    </nav>
        </>
    )
}

export default TopNav
