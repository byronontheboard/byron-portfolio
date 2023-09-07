import React from "react";
import About from "../About"
import Portfolio from "../Portfolio"
import Resume from "../Resume"
import Contact from "../Contact"
import GitHub from "../GitHub"
import PageContent from "../PageContent"

function Page({currentPage}){

    const renderPage = () => {
        switch (currentPage.name) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Resume":
                return  <Resume />
            case "Contact":
                return <Contact />;
            case "GitHub":
                return  <GitHub />
            default:
                return <About />;
        }
    };
    return (
        // This contains the Header for the active page as well as the corresponding body
        <section className="rounded d-grid">
            {/* This is the 'title' of the current page(for example on the 'About' page it will say 'About Me') */}
            <h2 className="glow header header-bg my-0 py-3 border-color rounded">{currentPage.name}</h2>
            <PageContent>
                {renderPage()}
            </PageContent>
        </section>
    );
}

export default Page;