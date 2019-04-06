import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";

class Wines extends Component {
  state = {
    totalBottles: null
  };

  static getDerivedStateFromProps(props, state) {
    const { wines } = props;
    if (wines) {
      const total = wines.reduce((total, wine) => {
        return total + parseFloat(wine.amount.toString());
      }, 0);

      return { totalBottles: total };
    }
    return null;
  }

  render() {
    const { wines } = this.props;
    const { totalBottles } = this.state;
    if (wines) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {" "}
                <i className="fas fa-wine-bottle" /> Red Wines
              </h2>
              <h2>
                <i className="fas fa-globe" /> France
              </h2>
            </div>
            <div className="col-md-6">
              <h5 className="text-right text-secondary">
                Total Bottles{" "}
                <span className="text-primary">
                  {parseFloat(totalBottles).toFixed(2)}
                </span>
              </h5>
            </div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Producer</th>
                <th>Location</th>
                <th>Year</th>
                <th>Price</th>
                <th>Volume</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {wines.map(wine => (
                <tr key={wine.id}>
                  <td>{wine.producer}</td>
                  <td>{wine.region}</td>
                  <td>{wine.year}</td>
                  <td>
                    <i className="fas fa-ruble-sign" />{" "}
                    {parseFloat(wine.price).toFixed(2)}
                  </td>
                  <td>{wine.vol}</td>
                  <td>{wine.amount}</td>
                  <td>
                    <Link
                        to={`/client/${wine.id}`}
                        className="btn btn-secondary"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Wines.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "wines" }]),
  connect((state, props) => ({
    wines: state.firestore.ordered.wines
  }))
)(Wines);
