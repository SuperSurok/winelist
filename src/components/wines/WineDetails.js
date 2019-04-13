import React, {Component} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";

class WineDetails extends Component {
    render(){
        const {wine} = this.props;

        if(wine) {
            return(
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="wines" className="btn btn-link">
                                <i className="fas fa-arrow-circle-left"/> Back To Wine List
                            </Link>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Spinner/>
        }
    }
}

export default compose(
    firestoreConnect(props => [{ collection: "wines", storeAs: 'wine', doc: props.match.params.id }]),
    connect(({firestore: {ordered}}, props) => ({
        wine: ordered.wine && ordered.wine[0]
    }))
)(WineDetails);