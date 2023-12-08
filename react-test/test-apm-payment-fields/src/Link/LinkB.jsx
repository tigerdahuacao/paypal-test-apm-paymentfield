import { Link } from "react-router-dom";
import "./Link.css";

import React from "react";

export default function LinkB() {
    return (
        <div>
            <button
                className="Link"
                style={{ backgroundColor: "rgb(231, 218, 242)" }}
            >
                <Link to="/B" style={{ textDecoration: "none" }}>
                    Go To B
                </Link>
            </button>
        </div>
    );
}
