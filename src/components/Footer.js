import React from 'react';

function Footer() {
    return (
        <>
            <div className='container-fluid' style={{ width: "80%", backgroundColor: "aliceblue", marginTop:"2%" }} >
                <div className=' left-side ' style={{ float: "left", }}>
                    <p>About Our store</p>
                    <img src='https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg' style={{ width: "25%" }}></img><br></br>
                    <img src='https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg' style={{ width: "25%", marginTop: "0.5%" }}></img>
                </div>
                <div className='right-side' style={{ float: "right", paddingLeft: "20px" }}>
                    <div className="container">
                        <div className="row mt-4">
                            <div className="col-lg-4 ">
                                <h6 >ELECTRONICS</h6>
                                <p>Mobiles</p>
                                <p>Tablets</p>
                                <p>Laptops</p>
                                <p>Laptops</p>
                            </div>
                            <div className="col-lg-4 ">
                                <h6>ELECTRONICS</h6>
                                <p>Mobiles</p>
                                <p>Tablets</p>
                                <p>Laptops</p>
                                <p>Laptops</p>
                            </div>
                            <div className="col-lg-4 ">
                                <h6>ELECTRONICS</h6>
                                <p>Buyone.info.com.hk</p>
                                <p>(852)26900948</p>
                                <p>Laptops</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            
        </>
    );
}

export default Footer;
