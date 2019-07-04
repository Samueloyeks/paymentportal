import React, { Component } from 'react'
import paypalLogo from '../../assets/img/paypal-logo.png';
import discoverLogo from '../../assets/img/discover-logo.jpeg';
import visaLogo from '../../assets/img/visa-logo.jpg';
import Cleave from 'cleave.js/react';
import 'react-credit-cards/es/styles-compiled.css';
import '../../App.scss';
import cardChip from '../../assets/img/card-chip.png';
import mastercardLogo from '../../assets/img/mastercard-logo.png';


export default class paymentPortal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '**** **** **** ****',
            expiryDate: '**/**',
        };
    }


    render() {

        return (
            <div id="payment-page">
                <div id="payment-container">
                    <div className="heading">
                        <div className="left-div">
                            <p className="big-text">Payment Information</p>
                            <p className="regular-text faded-text">Choose your method of payment</p>
                        </div>
                        <div className="right-div">
                            <img src={visaLogo} id="visa" />
                            <img src={discoverLogo} id="discover" />
                            <img src={paypalLogo} id="paypal" />
                        </div>
                    </div>
                    <div id="card-details">
                        <div className="left-input-div">
                            <div id="credit-card">
                                <p>CARD NUMBER</p><br />
                                <div className="card-responsive"><p >{this.state.cardNumber}</p></div>
                                <br />
                                <img src={cardChip} className="card-chip" /><br />
                                <p>EXPIRATION DATE</p><br />
                                <div className="card-responsive"><p>{this.state.expiryDate}</p></div>
                                <div className="card-div">
                                    <p>John Doe</p>
                                    <img src={mastercardLogo} />
                                </div>

                            </div>
                        </div>
                        <div className="right-input-div">
                            <div>
                                <div className="left-input">
                                    <label className="form-label">Credit card number</label><br />
                                    <Cleave className="form-input"
                                        options={{ creditCard: true }}
                                        name="cardNumber"
                                        onChange={e => {
                                            this.setState({
                                                cardNumber: e.target.value
                                            });
                                        }} />
                                    <label className="form-label">Security code</label><br />
                                    <input className="form-input" />
                                </div>
                                <div className="right-input">
                                    <label className="form-label">Expiration date</label><br />
                                    <Cleave className="form-input"
                                        options={{ date: true, datePattern: ['m', 'y'] }}
                                        onChange={e => {
                                            this.setState({
                                                expiryDate: e.target.value
                                            });
                                        }}
                                    />
                                    <label className="form-label">Postal code</label><br />
                                    <input className="form-input" />
                                </div><br />
                                <div className="full-width radio-div">
                                    <input type="radio" /><p className="radio-text">Use this card for next time purchase</p>
                                </div>
                                <div className="full-width ">
                                    <button className="form-button">Add Card</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div id="discount-container">
                    <div className="stack-div">
                        <p className="left-text">Subtotal</p>
                        <p className="right-text">₦2,497.00</p>
                    </div>
                    <div className="stack-div">
                        <p className="left-text">Estimated TAX</p>
                        <p className="right-text">₦119.64</p>
                    </div>
                    <div className="stack-div">
                        <p className="left-text">Promotional Code:</p><p className="faded-text">Z4KXLM9A</p>
                        <p className="right-text">-₦60.00</p>
                    </div>
                </div>
                <div id="total-container">
                    <div>
                        <button className="small-button">Complete payment</button>
                        <p className="right-text">TOTAL:₦2,556.64</p>
                    </div>
                </div>
            </div>
        )
    }
}
