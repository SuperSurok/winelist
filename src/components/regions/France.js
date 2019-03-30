import React, {Component} from "react";
import {Link} from "react-router-dom";

class France extends Component {
    render() {
        const wines = [
            {
                id: "23427",
                country: "France",
                region: "Pauillac",
                producer: "Chateau Mouton Rothschild",
                year: "1945",
                color: "red",
                price: "450000"
            }
        ];
        if (wines) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>
                                {" "}
                                <i className="fas fa-wine-bottle"/> Red Wines
                            </h2>
                            <h2>
                                <i className="fas fa-globe"/> France
                            </h2>
                        </div>
                        <div className="col-md-6"/>
                    </div>
                    <table className="table table-striped">
                        <thead className="thead-inverse">
                        <tr>
                            <th>Producer</th>
                            <th>Location</th>
                            <th>Year</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {wines.map(wine => (
                            <tr key={wine.id}>
                                <td>{wine.producer}</td>
                                <td>{wine.region}</td>
                                <td>{wine.year}</td>
                                <td>{wine.price}</td>
                                <td>
                                    <Link
                                        to={`/client/${wine.id}`}
                                        className="btn btn-secondary"
                                    >
                                        <i className="fas fa-arrow-circle-right"/> Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return <h1>Loading</h1>;
        }
    }
}

export default France;
