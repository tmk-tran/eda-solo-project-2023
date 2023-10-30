import React from "react";
import { Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "./AboutPage.css";

export default function ContactInfo() {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h5" color="primary" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1">
        If you have any questions or suggestions, feel free to contact:
      </Typography>
      <Typography variant="body1">
        <a
          href="mailto:tmk1.tran@gmail.com"
          style={{ textDecoration: "underline", color: "#1976D2" }}
        >
          <span id="email-link">
            <EmailIcon />
            tmk1.tran@gmail.com
          </span>
        </a>
      </Typography>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1">
          Or visit me at:
          <br />
          <Link
            href="https://github.com/tmk-tran"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon style={{ fontSize: "40px" }} />
          </Link>{" "}
          <Link
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon style={{ fontSize: "40px" }} />
          </Link>
        </Typography>
      </div>
    </div>
  );
}
