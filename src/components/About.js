import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class About extends Component {
    render() {
        let { mode } = this.props
        return (
            <div className={`accordion container mt-5 `} id="accordionExample" >
                <div className={`accordion-item text-${mode === 'light' ? 'dark' : 'light'}`} style={{ backgroundColor: `${mode === 'dark' ? 'rgb(64 46 46)' : 'rgb(240 233 255)'}` }}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button text-${mode === 'light' ? 'dark' : 'light'}`} style={{ backgroundColor: `${mode === 'dark' ? 'rgb(64 46 46)' : 'rgb(240 233 255)'}` }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Daily-Fresh-News</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse collapse show text-${mode === 'light' ? 'dark' : 'light'}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className={`accordion-body text-${mode === 'light' ? 'dark' : 'light'}`}>
                            <strong>Daily-Fresh-News</strong> is a website a open source news website latest news around the globe.
                        </div>
                    </div>
                </div>



                <div className={`accordion-item text-${mode === 'light' ? 'dark' : 'light'}`} style={{ backgroundColor: `${mode === 'dark' ? 'rgb(64 46 46)' : 'rgb(240 233 255)'}` }}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className={`accordion-button text-${mode === 'light' ? 'dark' : 'light'}`} style={{ backgroundColor: `${mode === 'dark' ? 'rgb(64 46 46)' : 'rgb(240 233 255)'}` }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <strong>Features</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className={`accordion-collapse collapse text-${mode === 'light' ? 'dark' : 'light'}`} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className={`accordion-body text-${mode === 'light' ? 'dark' : 'light'}`}>
                            <strong>Daily-Fresh-News</strong> provides news on different categories like
                            <Link to="/news"> NEWS </Link>,
                            <Link to="/sport">SPORT </Link>,
                            <Link to="/tech">TECH </Link>,
                            <Link to="/world">WORLD </Link>,
                            <Link to="/finance">FINANCE </Link>,
                            <Link to="/politics">POLITICS </Link>,
                            <Link to="/business">BUSINESS </Link>,
                            <Link to="/economics">ECONOMICS </Link>,
                            <Link to="/entertainment">ENTERTAINMENT </Link>,
                            <Link to="/beauty">BEAUTY </Link>,
                            <Link to="/travel">TRAVEL </Link>,
                            <Link to="/music">MUSIC </Link>,
                            <Link to="/food">FOOD </Link>,
                            <Link to="/science">SCIENCE </Link>,
                            <Link to="/energy">ENERGY </Link>
                            Available in many language for various countries.
                        </div >
                    </div >
                </div >


                <div className={`accordion-item text-${mode === 'light' ? 'dark' : 'light'}`} style={{ backgroundColor: `${mode === 'dark' ? 'rgb(64 46 46)' : 'rgb(240 233 255)'}` }}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button text-${mode === 'light' ? 'dark' : 'light'}`} style={{ backgroundColor: `${mode === 'dark' ? 'rgb(64 46 46)' : 'rgb(240 233 255)'}` }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            <strong>News Origin</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className={`accordion-collapse collapse text-${mode === 'light' ? 'dark' : 'light'}`} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className={`accordion-body text-${mode === 'light' ? 'dark' : 'light'}`}>
                            <strong>Daily-Fresh-News</strong> is a news website that work on the api provide by <strong>newscatcherapi.com</strong>.
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}
