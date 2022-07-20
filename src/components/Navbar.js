import React, { Component } from 'react'
// import proptype from 'prop-types'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        let { title = "Daily-Fresh-News", mode , changemode } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: `${mode === 'light' ? '#2e275bed' : 'rgb(35 27 27 / 96%)'}` }}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" style={{cursor:'none'}} to="/">{title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="form-check form-switch text-light ">
                        <input className="form-check-input " style={{cursor:'pointer'}} type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={changemode} defaultChecked />
                        <label className="form-check-label " style={{cursor:'pointer'}} htmlFor="flexSwitchCheckChecked">Dark Mode</label>
                    </div>
                </div>
            </nav>
        )
    }
}







