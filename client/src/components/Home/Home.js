import React, {useState, useEffect } from 'react';
import Banner from '../Banner/Banner'
import Features from '../Features/Features'
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../Footer/Footer'



const Home = ({}) => {
    
    

    return(
        <div>
            <Banner />
            <Features />
            <Newsletter />
            <Footer />
            
        </div>
    )
}

export default Home;