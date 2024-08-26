import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cart from "../../Asset/images/cart.jpeg";
import "./Modal.css";

const ModalSoup = ({ show, onClose, soup }) => {
    const [quantity, setQuantity] = useState(0);
  const handleClickOutside = (event) => {
    if (event.target.className === "modal-overlay") {
      onClose();
    }
  };

  useEffect(() => {
    show
      ? document.addEventListener("click", handleClickOutside)
      : document.removeEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [show]);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {soup && (
          <>
            <img
              src={soup.Image}
              alt={soup.soup}
              style={{ width: "50%", height: "200px" }}
            />

            <h2>{soup.soup} Soup</h2>
            <p>{soup.details}</p>
            <p>
              <strong>2 Litre bowl:</strong> N{`${soup.price}`}
            </p>
            <p>
              <strong>3 Litre bowl:</strong> N{`${soup.price1}`}
            </p>
            <p>
              <strong>4 Litre bowl:</strong> N{`${soup.price2}`}
            </p>
            <p>
              <strong>5 Litre bowl:</strong> N{`${soup.price3}`}
            </p>

            <div className="quantity-container">
              <button
                className="quantity-btn"
                onClick={decrementQuantity}>
                -
              </button>
              <span>{quantity}</span>
              <button
                className="quantity-btn"
                onClick={incrementQuantity}>
                +
              </button>
            </div>

            <div className="cart-checkout">
              <img
                src={cart}
                alt="cart icon"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#ccccff",
                  borderRadius: "100%",
                  padding: "2px",
                  border: "1px solid black",
                }}
              />
              <button
                className="checkout-button"
                style={{ fontFamily: "Exo" }}
                onClick={() => {}}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

ModalSoup.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  soup: PropTypes.shape({
    Image: PropTypes.string.isRequired,
    soup: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    price1: PropTypes.string.isRequired,
    price2: PropTypes.string.isRequired,
    price3: PropTypes.string.isRequired,
  }),
};

export default ModalSoup;
