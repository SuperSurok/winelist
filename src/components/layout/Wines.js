import React from "react";
import WineSidebar from "./WineSidebar";
import France from "../wines/France"

function Wines() {
    return (
        <div className="row">
            <div className="col-md-10">
                <France/>
            </div>
            <div className="col-md-2">
                <WineSidebar/>
            </div>
        </div>
    );
}

export default Wines;
