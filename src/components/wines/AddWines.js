import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
// import {compose} from "redux";
// import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";

class AddWines extends Component {
    state = {
        amount: "",
        color: "",
        country: "",
        price: "",
        producer: "",
        region: "",
        style: "",
        vol: "",
        year: ""
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };


    onSubmit = e => {
        e.preventDefault();
        const newWine = this.state;
        const {firestore, history} = this.props;

        firestore
            .add({collection: "wines"}, newWine)
            .then(() => history.push("/"));
    };

    render() {
        const {
            amount,
            color,
            country,
            price,
            producer,
            region,
            style,
            vol,
            year
        } = this.state;

        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/Wines" className="btn btn-link">
                            <i className="fas fa-arrow-circle-left"/> Back to Wines
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Add Wine</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="producer">Producer</label>
                                <input
                                    name="producer"
                                    type="text"
                                    className="form-control"
                                    minLength="2"
                                    required
                                    onChange={this.onChange}
                                    value={producer}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <input
                                    name="country"
                                    type="text"
                                    className="form-control"
                                    minLength="2"
                                    required
                                    onChange={this.onChange}
                                    value={country}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="region">Region</label>
                                <input
                                    name="region"
                                    type="text"
                                    className="form-control"
                                    minLength="2"
                                    required
                                    onChange={this.onChange}
                                    value={region}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="color">Color</label>
                                <input
                                    name="color"
                                    type="text"
                                    className="form-control"
                                    minLength="2"
                                    required
                                    onChange={this.onChange}
                                    value={color}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="style">Style</label>
                                <input
                                    name="style"
                                    type="text"
                                    className="form-control"
                                    minLength="2"
                                    required
                                    onChange={this.onChange}
                                    value={style}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="year">Year</label>
                                <input
                                    name="year"
                                    type="text"
                                    className="form-control"
                                    minLength="2"
                                    required
                                    onChange={this.onChange}
                                    value={year}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vol">Volume</label>
                                <input
                                    name="vol"
                                    type="text"
                                    className="form-control"
                                    minLength="2"
                                    required
                                    onChange={this.onChange}
                                    value={vol}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input
                                    name="price"
                                    type="text"
                                    className="form-control"
                                    minLength="2"
                                    required
                                    onChange={this.onChange}
                                    value={price}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="amount">Amount</label>
                                <input
                                    name="amount"
                                    type="text"
                                    className="form-control"
                                    minLength="1"
                                    required
                                    onChange={this.onChange}
                                    value={amount}
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

AddWines.propTypes = {
    firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(AddWines);
