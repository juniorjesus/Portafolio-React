import React from "react";
import "../css/networdks.css";
export default function Networdks() {
  return (
    <div className="networks">
      <a
        className="github"
        href="https://github.com/juniorjesus"
        target="_blank"
      >
        <button>
          <i className="icon-github"></i>
        </button>
      </a>
      <a
        className="email"
        href="mailto:lopezjunior1996@gmail.com"
        target="_blank"
      >
        <button>
          <i className="icon-mail"></i>
        </button>
      </a>
      <a
        className="linkedin"
        href="https://www.linkedin.com/in/jrjesus18-81197615b/"
        target="_blank"
      >
        <button>
          <i className="icon-linkedin"></i>
        </button>
      </a>
    </div>
  );
}
