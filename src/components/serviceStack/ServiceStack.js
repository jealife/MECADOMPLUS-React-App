import React from "react";
import { Link } from "react-router-dom";

export default function ServiceStack() {
    return (
        <div className="services-container">
            <Link href="#">Vidange</Link>
            <Link href="#">Lavage</Link>
            <Link href="#">Dépannage</Link>
            <Link href="#">Consultation globale</Link>
            <Link href="#">Climatisation</Link>
            <Link href="#">Batterie</Link>
        </div>
    );
}