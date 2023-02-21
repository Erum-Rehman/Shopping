import ButtonsExample from "../components/Search";
import Footer from "../components/Footer";
import GridExample from "../components/Product";
import React from 'react';

function Home() {
    return (
        <>
            <div>
                <div className="advertise_div ">
                    <p className='text-center'>ADVERTISING BANNER </p>
                </div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid ">

                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav justify-content-start">
                                <a class="nav-link active text-dark" aria-current="page" href="#">Home</a>
                                <a class="nav-link text-dark" href="#">Features</a>
                                <a class="nav-link text-dark" href="#">Pricing</a>
                            </div>
                        </div>
                        <div class="collapse navbar-collapse justify-content-end " id="navbarCollapse ">
                            <div class="navbar-nav  ">
                                <a href="#" class="nav-item nav-link active text-dark">Home</a>
                                <a href="#" class="nav-item nav-link text-dark">Home</a>
                                <a href="#" class="nav-item nav-link text-dark">Home</a>
                                <a href="#" class="nav-item nav-link text-dark">Home</a>
                                <a href="#" class="nav-item nav-link text-dark">Home</a>
                                <a href="#" class="nav-item nav-link text-dark">Home</a>

                            </div>
                        </div>

                    </div>

                </nav>
            </div>
            <div style={{ backgroundColor: '#edf0f5' }}>
                <ButtonsExample />
                <GridExample />
                <Footer />
            </div>
        </>
    );
}

export default Home;