import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import { SiBlackberry } from "react-icons/si";

const Unauthorized = () => {
  return (
    <Layout title="Unauthorized">
      <div
        classname="wrapper"
        style={{
          position: "relative",
          maxWidth: 1298,
          height: "auto",
          margin: "2em auto 0 auto",
          background:
            'transparent url("https://www.dropbox.com/s/qq5n8w99q40wtrg/wood-fence.png?raw=1") no-repeat center top 24em',
        }}
      >
        <div
          classname="box"
          style={{
            maxWidth: "70%",
            minHeight: 600,
            margin: "0 auto",
            padding: "1em 1em",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: "0 0 1rem 0",
              fontSize: "8em",
              textShadow: "0 0 6px #8b4d1a",
            }}
          >
            403
          </h1>
          <p
            style={{
              marginBottom: "0.5em",
              fontSize: "1.75em",
              color: "#ea8a1a",
            }}
          >
            Sorry, it's not allowed to go beyond this point!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Unauthorized;
