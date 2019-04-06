import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
// import { compose } from "redux";
// import { connect } from "react-redux";
import {firestoreConnect} from "react-redux-firebase";

class AddClients extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        balance: ""
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();
        const newClient = this.state;
        const {firestore, history} = this.props;

        // If no balance, make 0

        if (newClient.balance === 0) {
            newClient.balance = 0;
        }
        firestore
            .add({collection: "clients"}, newClient)
            .then(() => history.push("/"));
    };

    render() {
        const {firstName, lastName, email, phone, balance} = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                            <i className="fas fa-arrow-circle-left"/> Back to Dashboard
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Add Clients</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    name="firstName"
                                    type="text"
                                    className="form-control"
                                    minLength="2"
                                    required
                                    onChange={this.onChange}
                                    value={firstName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    name="lastName"
                                    type="text"
                                    className="form-control"
                                    minLength="2"
                                    required
                                    onChange={this.onChange}
                                    value={lastName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    minLength="2"
                                    onChange={this.onChange}
                                    value={email}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    name="phone"
                                    type="tel"
                                    className="form-control"
                                    minLength="10"
                                    onChange={this.onChange}
                                    value={phone}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="balance">Balance</label>
                                <input
                                    name="balance"
                                    type="text"
                                    className="form-control"
                                    onChange={this.onChange}
                                    value={balance}
                                />
                            </div>
                            <input
                                type="submit"
                                value="Submit"
                                className="btn btn-primary btn-block"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

AddClients.propTypes = {
    firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(AddClients);
