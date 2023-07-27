import React from "react";

export default function Alert(props) {
  return (
    // agar null hoga tw div wala execute nhi hoga
    props.alert && (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>{props.alert.message}</strong>
      </div>
    )
  );
}
