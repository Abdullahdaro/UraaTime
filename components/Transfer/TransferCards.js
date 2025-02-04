import React, { useState } from "react";

export default function TransferCards({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div style={styles.cardContainer}>
      <div style={styles.imageContainer}>
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}${product.image?.[0]}`}
          alt={product.title}
          style={{
            ...styles.image,
            width: '200px',  // Add explicit width
            height: '150px', // Add explicit height
            objectFit: 'cover' // Ensure image covers the area properly
          }}
        />
      </div>
      <div style={styles.detailsContainer}>
        <h3 style={styles.title}>
          {product.title} x {product.quantity}
        </h3>
        <p style={styles.detail}>
          <span style={styles.icon}>🚗</span> Type of the Transfer:{" "}
          <strong>{product.type}</strong>
        </p>
        <p style={styles.detail}>
          <span style={styles.icon}>👤</span> Number of passengers:{" "}
          <strong>{product.passengers}</strong>
        </p>
{/*         <p style={styles.detail}>
          <span style={styles.icon}>🧳</span> Number of luggage:{" "}
          <strong>
            {product.luggage.big} Bigs & {product.luggage.hand} Hand bags
          </strong>
        </p> */}
      </div>
      <div style={styles.priceContainer}>
        <p style={styles.priceLabel}>Total price (per vehicle)</p>
        <p style={styles.price}>${product.price}</p>
        <button 
          style={{
            ...styles.bookButton,
            backgroundColor: isHovered ? "#f39c12" : "#f1c40f",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Book now
        </button>
        <p style={styles.taxesNote}>All Taxes & Fees included</p>
      </div>
    </div>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #f0f0f0",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px 0",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  imageContainer: {
    flex: "1",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "8px",
  },
  detailsContainer: {
    flex: "2",
    padding: "0 20px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#f1c40f",
  },
  detail: {
    fontSize: "14px",
    margin: "5px 0",
    color: "#333",
  },
  icon: {
    marginRight: "5px",
  },
  priceContainer: {
    flex: "1",
    textAlign: "center",
  },
  priceLabel: {
    fontSize: "14px",
    color: "#999",
  },
  price: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#f1c40f",
  },
  bookButton: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#f1c40f",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  taxesNote: {
    fontSize: "12px",
    color: "#999",
    marginTop: "5px",
  },
};
