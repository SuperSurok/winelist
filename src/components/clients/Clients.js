import React, {Component} from "react";

class Clients extends Component {
    render() {
        const clients = [
            {
                id: "234523",
                firstName: "Aleksey",
                lastName: "Voyonv",
                email: "voynov@gmai.com",
                phone: "+7-999-77-77-777",
                balance: "10000"
            }
        ];
        if (clients) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2><i className="fas fa-users"></i> Clients</h2>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            );
        } else {
            return <h1>Loading</h1>;
        }
    }
}

export default Clients;
