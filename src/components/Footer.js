import React from 'react';

function Footer() {
    return (
        <>
        <br/>
        
                <div className="footer_div">
                <div className=' left-side ' style={{ float: "left", }}>
                    <p>About Our store</p>
                    <img src='https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg' style={{ width: "35%" }}></img><br></br>
                    <img src='https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg' style={{ width: "35%", marginTop: "2%" }}></img>
                </div>
                <div className='right-side' style={{ float: "right", paddingLeft: "20px" }}>
                    <div className="container">
                        <div className="row mt-4">
                            <div className="col-lg-4 footer_right">
                                <h6 >ELECTRONICS</h6>
                                <p>Mobiles</p>
                                <p>Tablets</p>
                                <p>Laptops</p>
                                <p>Laptops</p>
                            </div>
                            <div className="col-lg-4 footer_right">
                                <h6>ELECTRONICS</h6>
                                <p>Mobiles</p>
                                <p>Tablets</p>
                                <p>Laptops</p>
                                <p>Laptops</p>
                            </div>
                            <div className="col-lg-4 footer_right">
                                <h6>ELECTRONICS</h6>
                                <p>Buyone.info.com.hk</p>
                                <p>(852)26900948</p>
                                <p>Laptops</p>
                            </div>

                        </div>

                    </div>
                </div>
                </div>
                
            <div className='prim_footer'>
                <p>It is a long established fact that a reader will be distracted by the readable</p>
                <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2%', paddingRight: '4%'}}>
                <p>2022 Buyone.com Online Store.jkdjsd</p>
                <div style={{display: 'flex'}}>
                <p className='px-3'>policy</p>
                <p className='px-3'>policy</p>
                <p className='px-3'>policy</p>
                </div>
               
                </div>
            </div>
        </>
    );
}

export default Footer;
