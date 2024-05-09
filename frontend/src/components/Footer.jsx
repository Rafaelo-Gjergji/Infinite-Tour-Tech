import React from "react";

function Footer() {
  return (
    <footer
      style={{
        marginTop: "20px",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Infinite Tour Technologies. All rights
        reserved.
      </p>
      <p>
        Contact Us:{" "}
        <a href="mailto:contact@infinitetourtech.com">
          contact@infinitetourtech.com
        </a>
      </p>
    </footer>
  );
}

export default Footer;
