import React from "react";
import { Link } from "react-router-dom";

//בעזרת "לינק" הפכתי את כותרת האפליקציה ללינק לעמוד הבית כדי לא ליצור כפתור מיותר
export default function Title() {
  return (
    <div>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "black", fontSize: "2rem" }}
      >
        <h1>Smart-House</h1>
      </Link>
    </div>
  );
}
