import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./button/Button";
import soupsArrays from "../component/SoupData";
import ModalSoup from "../component/modal/ModalSoup"

const Menu = () => {
  const [selectedSoup, setSelectedSoup] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowDetails = (soup) => {
    setSelectedSoup(soup);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>Our Soups</h2>
      <div style={gridContainerStyle}>
        {soupsArrays.map((item) => (
          <div key={uuidv4()} style={cardStyle} className="soup-card">
            <img
              src={item.Image}
              alt={item.soup}
              style={imageStyle}
              className="soup-image"
            />
            <h3 style={soupStyle}>{item.soup.toUpperCase()} SOUP</h3>
            <div style={priceStyles}>
                <span>{item.details}</span>
            </div>
            <div style={priceStyles}>
                <span>{item.range}</span>
            </div>
              {/* <span>N{item.price} for 4 Litre bowl</span>
              <br />
              <span>N{item.price1} for 10 Litre bowl</span> */}
            <p style={detailsStyle} onClick={() => handleShowDetails(item)}>
              Details
            </p>
          </div>
        ))}
      </div>
      <div style={buttonContainerStyle}>
        <Button
          variant="primary"
          onClick={() => {
            /* Your click handler */
          }}
        >
          ORDER NOW
        </Button>
      </div>
      
      <ModalSoup 
       show={showModal} 
       onClose={handleCloseModal} 
       soup={selectedSoup} 
       />

      <style jsx>{`
        .soup-image:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

const cardStyle = {
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  backgroundColor: "#fff",
  padding: "16px",
  fontFamily: "Exo",
  textAlign: "center",
  transition: "transform 0.3s ease",
};

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  background: "#edede9",
  borderRadius: "0.625rem",
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

const priceStyles = {
  border: "none",
  paddingTop: "8px",
  position: "relative",
  bottom: "0.75rem",
  paddingBottom: "8px",
  fontSize: "13px",
  borderRadius: "0.3125rem",
};

const detailsStyle = {
  border: "none",
  color: "#000080",
  position: "relative",
  bottom: "0.75rem",
  paddingTop: "5px",
  paddingBottom: "5px",
  borderRadius: "0.3125rem",
  cursor: "pointer",
  backgroundColor: "#F0FFFF",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
};

const soupStyle = { color: "#000080" };
export default Menu;
