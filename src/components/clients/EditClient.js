import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import Spinner from "../layout/Spinner";
import classnames from "classnames";


class EditClient extends Component {
    constructor(props){
        super(props);
        this.firstNameInput = React.createRef();
        this.lastNameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
        this.balanceInput = React.createRef();
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e){
        e.preventDefault();

        const {client, firestore, history } = this.props;

        // Update Client
        const updateClient = {
            firstName: this.firstNameInput.current.value,
            lastName: this.lastNameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
            balance: this.balanceInput.current.value === '' ? 0 : this.balanceInput.current.value
        };

        // Update Client in FireStore
        firestore.update({collection: 'clients', doc: client.id}, updateClient)
            .then(history.push('/'));
    };

    render() {
        const {client} = this.props;
        if (client) {
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
                        <div className="card-header">Edit Client</div>
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
                                        ref={this.firstNameInput}
                                        defaultValue={client.firstName}
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
                                        ref={this.lastNameInput}
                                        defaultValue={client.lastName}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        minLength="2"
                                        ref={this.emailInput}
                                        defaultValue={client.email}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        name="phone"
                                        type="tel"
                                        className="form-control"
                                        minLength="10"
                                        ref={this.phoneInput}
                                        defaultValue={client.phone}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="balance">Balance</label>
                                    <input
                                        name="balance"
                                        type="text"
                                        className="form-control"
                                        ref={this.balanceInput}
                                        defaultValue={client.balance}
                                    />
                                </div>
                                <input
                                    onSubmit={this.onSubmit}
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-primary btn-block"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Spinner/>
        }
    }
}

EditClient.propTypes = {
    firestore: PropTypes.object.isRequired
};

export default compose(
    firestoreConnect(props => [{collection: "clients", storeAs: 'client', doc: props.match.params.id}]),
    connect(({firestore: {ordered}}, props) => ({
        client: ordered.client && ordered.client[0]
    }))
)(EditClient);