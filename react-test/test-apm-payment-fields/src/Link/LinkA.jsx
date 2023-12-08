import { Link } from "react-router-dom";
import "./Link.css";

import React from "react";

export default function LinkA() {
    return (
        <div>
            <button className="Link" style={{ backgroundColor: "rgb(123, 52, 190)" }}>
                <Link to="/A" style={{ textDecoration: "none" }}>
                    Go To A
                </Link>
            </button>
        </div>
    );
}
