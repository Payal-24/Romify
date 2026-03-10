import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartIcon() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const totalQty = cart.items.reduce((sum, item) => sum + item.quantity, 0); 

  return (
    <div style={{ position: "fixed", top: 24, right: 32, zIndex: 2000 }}>
      <button
        onClick={() => navigate("/cart")}
        style={{
          background: "#fff",
          border: "2px solid #e29547",
          borderRadius: "50%",
          width: 54,
          height: 54,
          boxShadow: "0 2px 10px #e2954722",
          cursor: "pointer",
          position: "relative",
        }}
        title="View Cart"
      >
        <span style={{ fontSize: 28, color: "#e29547" }}>🛒</span>
        {totalQty > 0 && (
          <span
            style={{
              position: "absolute",
              top: 6,
              right: 8,
              background: "#e29547",
              color: "#fff",
              borderRadius: "50%",
              padding: "2px 8px",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            {totalQty}
          </span>
        )}
      </button>
    </div>
  );
}
