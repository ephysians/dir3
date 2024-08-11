import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Egusi1 from '../Asset/images/Egusi1.jpg';
import BangaDelta from '../Asset/images/BangaDelta.jpg';
import Oha1 from '../Asset/images/Oha1.jpg';
import ogbono from '../Asset/images/ogbono.jpg';
import okro2 from '../Asset/images/okro2.jpg';
import eforiron from '../Asset/images/eforiron.jpg';
import betteleaf from '../Asset/images/betteleaf.webp';
import afang from '../Asset/images/afang.jpg';
import ChikeknPepperSoup from '../Asset/images/ChikeknPepperSoup.jpg';
import catFishpepperSoup from '../Asset/images/catFishpepperSoup.webp';
import OfeOwerri1 from '../Asset/images/OfeOwerri1.jpg';
import Nsala1 from '../Asset/images/Nsala1.jpg';
import Button from './button/Button';

const Menu = () => {
    const soupsArrays = [
        {
            soup: "Egusi",
            Image: Egusi1,
            details: "Traditional Igbo tasty Egusi soup delivered with dried fish & goat meat",
            price: "5000",
            price1: "10000",
        },
        {
            soup: "Oha",
            Image: Oha1,
            details: "Igbo Oha soup garnished with variety of dried fish meat made with the best native ingredients",
            price: "5000",
            price1: "10000",
        },
        {
            soup: "Banga",
            Image: BangaDelta,
            details: "Amazing Delta Banga soup garnished with flavored goat meat",
            price: "5000",
            price1: "10000",
        },
        {
            soup: "Ogbono",
            Image: ogbono,
            details: "Traditional Igbo tasty Ogbono soup with 10 pieces of goat meat",
            price: "5000",
            price1: "10000",
        },
        {
            soup: "Okro",
            Image: okro2,
            details: "Traditional Igbo tasty Okro soup with 10 pieces of goat meat",
            price: "5000",
            price1: "10000",
        },
        {
            soup: "Eforiro",
            Image: eforiron,
            details: "Traditional Igbo tasty Efor Iron soup with 10 pieces of goat meat",
            price: "5000",
            price1: "10000",
        },
        {
            soup: "Afang",
            Image: afang,
            details: "Try the banging Afang soup prepared with numerous dried fish for taste and assorted meat that make swallow a divine experience",
            price: "5000",
            price1: "10000",
        },
        {
            soup: "Bitter leaf",
            Image: betteleaf,
            details: "Igbo tasty Bitterleaf soup with assorted meat garnished with dried fish",
            price: "5000",
            price1: "10000",
        },
        {
            soup: "Chikekn Pepper",
            Image: ChikeknPepperSoup,
            details: "Incredible Chikekn Pepper Soup with assorted meat garnished with dried fish",
            price: "5000",
            price1: "10000",
        },
        {
            soup: "cat Fish pepper",
            Image: catFishpepperSoup,
            details: "Spicy and tasty cat Fish pepper soup with assorted meat garnished with dried fish",
            price: "5000",
            price1: "10000",
        },
        {
            soup: "Ofe Nsala",
            Image: Nsala1,
            details: "Spicy and tasty cat Fish pepper soup with assorted meat garnished with dried fish",
            price: "5000",
            price1: "10000",
        }, {
            soup: "Ofe Owerri",
            Image: OfeOwerri1,
            details: "Spicy and tasty cat Fish pepper soup with assorted meat garnished with dried fish",
            price: "5000",
            price1: "10000",
        }
    ];

    const cardStyle = {
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        backgroundColor: "#fff",
        padding: "16px",
        // textSize: "10px",
        fontFamily: 'Exo',
        textAlign: "center",
        transition: "transform 0.3s ease",
    };

    const gridContainerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        background: "#edede9",
        gap: "20px",
        padding: "20px",
        color: "#252525",
    };

    const imageStyle = {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "10px",
        transition: "transform 0.3s ease",
    };

    const priceSyles = {
        border: "none",
        paddingTop: "8px",
        paddingBottom: "8px",
        borderRadius: "0.3125rem",
        // backgroundColor: '#F0FFFF',
    };
    const detailsStyle = {
        border: "none",
        color: "#000080",
        paddingTop: "5px",
        paddingBottom: "5px",
        borderRadius: "0.3125rem",
        cursor: "pointer",
        backgroundColor: '#F0FFFF',
    };
    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    };
    const soupStyle = { color: "#000080"}

    return (
        <div>
            <h2>Our Soups</h2>
            <div style={gridContainerStyle}>
                {soupsArrays.map((item) => {
                    return (
                        <div
                            key={uuidv4}
                            style={cardStyle}
                            className="soup-card"
                        >
                            <img src={item.Image} alt={item.soup} style={imageStyle} className="soup-image" />
                            <h3 style={soupStyle}>{item.soup.toUpperCase()} SOUP</h3>
                            <div style={priceSyles}>
                                <span>N{item.price} for 4 Litre bowl</span><br />
                                <span>N{item.price1} for 10 Litre bowl</span>
                            </div>
                            <p style={detailsStyle}>Details</p>
                        </div>
                    );
                })}
               
            </div>
            <div style={buttonContainerStyle}>
                <Button
                    variant="primary"
                    onClick={() => { /* Your click handler */ }}
                >
                    ORDER NOW
                </Button>
            </div>
            <style jsx>{`.soup-card:hover .soup-image { transform: scale(1.1); // Zoom in on the image on hover }`}</style>
        </div>
    );
};

export default Menu;
