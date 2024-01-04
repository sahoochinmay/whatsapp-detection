import React, { useEffect } from "react";

const WhatsAppRedirect = () => {
  useEffect(() => {
    handleWhatsAppClick();
  }, []);
  const handleWhatsAppClick = () => {
    const phoneNumber = "9937159477";
    const text = "hi";
    const whatsappLink = `whatsapp://send/?phone=${phoneNumber}&text=${text}`;

    // Attempt to open the WhatsApp link
    window.location.href = whatsappLink;

    // Set a timeout to check if the user navigated away
    const timeout = setTimeout(() => {
      // If the user hasn't navigated away, show an alert
      if (document.hidden) {
        alert("WhatsApp is not installed on your device.");
      }
    }, 2000); // Adjust the timeout as needed

    // Listen for visibility changes
    document.addEventListener("visibilitychange", () => {
      // If the user navigated away, clear the timeout
      if (document.hidden) {
        clearTimeout(timeout);
      }
    });
  };
  return (
    <div>
      <p>WhatsApp Redirect Page</p>
      <button>WhatsApp is not installed on your device. </button>
    </div>
  );
};

export default WhatsAppRedirect;
