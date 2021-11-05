import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div ClassName="home">
            <div ClassName="home--container">
                <img className="home--image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />

                <div className="home--row">
                    <Product
                        id="01"
                        title="See U in C by Ali Karim Sayed (Author)"
                        price={4814.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="02"
                        title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage)"
                        price={39990.00}
                        image="https://m.media-amazon.com/images/I/81vDZyJQ-4L._SL1500_.jpg"
                    />
                    <Product
                        id="03"
                        title="Noise ColorFit Pulse Spo2 Smart Watch with 10 days battery life"
                        price={2899.00}
                        image="https://m.media-amazon.com/images/I/61epn29QG0L._SL1500_.jpg"
                    />
                </div>

                <div className="home--row">
                    <Product
                        id="04"
                        title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, 16GB RAM, 1TB SSD, 2.0GHz Quad-core 10th-Generation"
                        price={159077.00}
                        image="https://m.media-amazon.com/images/I/716R-UhEB+L._SL1500_.jpg"
                    />
                    <Product
                        id="05"
                        title="Bosch 7 kg 5 Star Inverter Touch Control Fully Automatic Front Loading Washing"
                        price={30990.00}
                        image="https://m.media-amazon.com/images/I/71laDnTjKPL._SL1500_.jpg"
                    />
                </div>

                <div className="home--row">
                    <Product
                        id="06"
                        title="Maison & Cuisine® 6+2 Layer Fancy and Portable Foldable Collapsible Closet/Cabinet"
                        price={1299.00}
                        image="https://m.media-amazon.com/images/I/818dGIz7sQL._SL1500_.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
