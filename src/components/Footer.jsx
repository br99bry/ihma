<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Footer.scss';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import LinkedIn from '../img/LinkedIn.png';

class Footer extends React.Component{

    render(){

        return (
            <footer className="Footer">
                <div className="footer-container">
                   <div className="Footer__item">
                       <div>
                        <Link to="/ihma" >
                        <p> {this.props.link1} </p>
                        </Link>
                        <Link to="/AreasDePractica" >
                        <p> {this.props.link2} </p>
                        </Link>
                        <Link to="/Equipo-Legal" >
                        <p> {this.props.link3} </p>
                        </Link>
                        <Link to="/Clientes" >
                        <p> {this.props.link4} </p>
                        </Link>
                        <Link to="/reconocimientos" >
                        <p> {this.props.link5} </p>
                        </Link>
                        <Link to="/alianzas" >
                        <p> {this.props.link6} </p>
                        </Link>

                       </div>
                   </div>
                   <div className="Footer__item">
                        <div>
                            <p> {this.props.language.footer.terms} </p>
                            <p> {this.props.language.footer.politicy} </p>
                       </div>
                   </div>
                   <div className="Footer__item">
                       <div> {this.props.language.footer.contact} </div>
                       <div>
                           <i>Office Woodlands, Texas</i>
                           <br/>
                           1095 Evergreen Circle Suite 200 - 432 The Woodlands, TX 77380 T. +1(281) 206 0030
                       </div>
                       <div>
                            <i>Oficina Ciudad de México</i>
                           <br/>
                           Bosque de Ciruelos 130 -501 Col. Bosques de las Lomas, Ciudad de México, 11700 T. +(5255) 5292 6191 +(5255) 5251 8373
                       </div>
                   </div>
                   <div className="Footer__item">
                       <div>
                           <div> {this.props.language.footer.join} <br/> {this.props.language.footer.social} </div>
                       {/* <div>
                           <img src={facebook} alt=""/>
                            <a href="/">Facebook</a>
                       </div>
                       <div>
                           <img src={twitter} alt=""/>
                            <a href="/">Twitter</a>
                       </div> */}
                       <div>
                           <img src={LinkedIn} alt=""/>
                            <a href="/">Linkedink</a>
                       </div>
                       </div>
                    </div> 
                </div>
            </footer>
        );

    }

}

=======
import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Footer.scss';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import LinkedIn from '../img/LinkedIn.png';

class Footer extends React.Component {

    render() {

        return (
            <footer className="Footer">
                <div className="footer-container">
                    <div className="Footer__item">
                        <div>
                            <Link to="/" >
                                <p> {this.props.link1} </p>
                            </Link>
                            <Link to="/AreasDePractica" >
                                <p> {this.props.link2} </p>
                            </Link>
                            <Link to="/Equipo-Legal" >
                                <p> {this.props.link3} </p>
                            </Link>
                            <Link to="/Clientes" >
                                <p> {this.props.link4} </p>
                            </Link>
                            <Link to="/reconocimientos" >
                                <p> {this.props.link5} </p>
                            </Link>
                            <Link to="/alianzas" >
                                <p> {this.props.link6} </p>
                            </Link>

                        </div>
                    </div>
                    <div className="Footer__item">
                        <div>
                            <p> {this.props.language.footer.terms} </p>
                            <p> {this.props.language.footer.politicy} </p>
                        </div>
                    </div>
                    <div className="Footer__item">
                        <div> {this.props.language.footer.contact} </div>
                        <div>
                            <i>Office Woodlands, Texas</i>
                            <br />
                           1095 Evergreen Circle Suite 200 - 432 The Woodlands, TX 77380 T. +1(281) 206 0030
                       </div>
                        <div>
                            <i>Oficina Ciudad de México</i>
                            <br />
                           Bosque de Ciruelos 130 -501 Col. Bosques de las Lomas, Ciudad de México, 11700 T. +(5255) 5292 6191 +(5255) 5251 8373
                       </div>
                    </div>
                    <div className="Footer__item">
                        <div>
                            <div> {this.props.language.footer.join} <br /> {this.props.language.footer.social} </div>
                            {/* <div>
                           <img src={facebook} alt=""/>
                            <a href="/">Facebook</a>
                       </div>
                       <div>
                           <img src={twitter} alt=""/>
                            <a href="/">Twitter</a>
                       </div> */}
                            <div>
                                <img src={LinkedIn} alt="" />
                                <a href="/">Linkedink</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );

    }

}

>>>>>>> 966f7db3c31969e4d30bf58656f74ce353731d2b
export default Footer;