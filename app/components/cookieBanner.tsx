"use client";
import { useEffect, useState } from "react";
import { FaCookieBite } from "react-icons/fa";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieAccepted", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="cookie-banner"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        right: "20px",
        background: "#f3f3f3",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        zIndex: 9999,
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <FaCookieBite size={24} color="#4caf50" />
        <span style={{ fontSize: "14px", color: "#333" }}>
          Usamos cookies para mejorar tu experiencia y mostrarte anuncios personalizados.
        </span>
      </div>
      <button
        onClick={acceptCookies}
        style={{
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "8px 16px",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        Aceptar
      </button>
    </div>
  );
}