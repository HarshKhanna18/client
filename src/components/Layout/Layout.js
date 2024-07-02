import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
        <meta name="author" content={author}></meta>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "75vh" }}>{children}</main>
      <Toaster />
      <Footer />
    </div>
  );
};

Layout.defaultParameter = {
  title: "Ecommerce App",
  description: "MERN Full Stack Project",
  keywords: "mern,react,node,mongdb",
  author: "Harsh Khanna",
};

export default Layout;
