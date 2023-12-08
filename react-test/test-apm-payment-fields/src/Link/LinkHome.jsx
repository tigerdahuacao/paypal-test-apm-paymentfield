import { Link } from "react-router-dom";
import "./Link.css";

import React from "react";


export default function LinkHome() {
    return (
        <div>
            <button className="Link" style={{ backgroundColor: "rgb(98, 208, 42)" }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    Go To Home
                </Link>
            </button>
        </div>
    );
}
