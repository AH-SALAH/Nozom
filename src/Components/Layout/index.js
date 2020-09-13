import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

export { Header, Body, Footer };

const Layout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
};

export default Layout;
