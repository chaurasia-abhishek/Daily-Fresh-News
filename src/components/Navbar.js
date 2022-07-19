import React, { Component } from 'react'
// import proptype from 'prop-types'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        let { title = "Daily-Fresh-News",country='in', language = 'en'} = this.props;
        return (
            <nav className="navbar navbar-expand-lg bg-dark sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">{title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light" aria-current="page" to="/Home">Home</Link>
                                </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/">About</Link>
                                </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/business">Business</Link>
                                </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
                                </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/general">General</Link>
                                </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/health">Health</Link>
                                </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/science">Science</Link>
                                </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/sports">Sports</Link>
                                </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/technology">Technology</Link>
                                </li>
                        </ul>
                        <select className="form-select-sm mx-1" aria-label="Default select example">
                            <option defaultValue={language}>English</option>
                            <option value="AR">AR</option>
                            <option value="DE">DE</option>
                            <option value="EN">EN</option>
                            <option value="ES">ES</option>
                            <option value="FR">FR</option>
                            <option value="HE">HE</option>
                            <option value="IT">IT</option>
                            <option value="NL">NL</option>
                            <option value="NO">NO</option>
                            <option value="PT">PT</option>
                            <option value="RU">RU</option>
                            <option value="SV">SV</option>
                            <option value="UD">UD</option>
                            <option value="ZH">ZH</option>
                        </select>
                        <select className="form-select-sm mx-1" aria-label="Default select example">
                            <option defaultValue={country}>India</option>
                            <option value="AE">AE</option>
                            <option value="AR">AR</option>
                            <option value="AT">AT</option>
                            <option value="AU">AU</option>
                            <option value="BE">BE</option>
                            <option value="BG">BG</option>
                            <option value="BR">BR</option>
                            <option value="CA">CA</option>
                            <option value="CH">CH</option>
                            <option value="CN">CN</option>
                            <option value="CO">CO</option>
                            <option value="CU">CU</option>
                            <option value="CZ">CZ</option>
                            <option value="DE">DE</option>
                            <option value="EG">EG</option>
                            <option value="FR">FR</option>
                            <option value="GB">GB</option>
                            <option value="GR">GR</option>
                            <option value="HK">HK</option>
                            <option value="HU">HU</option>
                            <option value="ID">ID</option>
                            <option value="IE">IE</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="IT">IT</option>
                            <option value="JP">JP</option>
                            <option value="KR">KR</option>
                            <option value="LT">LT</option>
                            <option value="LV">LV</option>
                            <option value="MA">MA</option>
                            <option value="MX">MX</option>
                            <option value="MY">MY</option>
                            <option value="NG">NG</option>
                            <option value="NL">NL</option>
                            <option value="NO">NO</option>
                            <option value="NZ">NZ</option>
                            <option value="PH">PH</option>
                            <option value="PL">PL</option>
                            <option value="PT">PT</option>
                            <option value="RO">RO</option>
                            <option value="RS">RS</option>
                            <option value="RU">RU</option>
                            <option value="SA">SA</option>
                            <option value="SE">SE</option>
                            <option value="SG">SG</option>
                            <option value="SI">SI</option>
                            <option value="SK">SK</option>
                            <option value="TH">TH</option>
                            <option value="TR">TR</option>
                            <option value="TW">TW</option>
                            <option value="UA">UA</option>
                            <option value="US">US</option>
                            <option value="VE">VE</option>
                            <option value="ZA">ZA</option>
                        </select>

                    </div>
                </div>
            </nav>
        )
    }
}

// Navbar.proptype={
//     title : proptype.number.isRequired
// }

// Navbar.defaultProps={
//     title : "Daily-Fresh-News"
// }






