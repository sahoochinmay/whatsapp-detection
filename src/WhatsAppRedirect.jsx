import React, { useEffect } from "react";

const WhatsAppRedirect = () => {
  useEffect(() => {
    // Check if WhatsApp is installed
    // isAppInstalled("https://wa.me/918837849092?text=Kindly%20Click%20on%20Send%20Message%20Button%20qr%3Fi%3D");
    // if (isWhatsAppInstalled) {
    //   // Redirect to WhatsApp
    //   window.location.href = "whatsapp://send?text=Hello";
    // } else {
    //   // Show alert and stay in your app
    //   alert("WhatsApp is not installed on your device.");
    // }
    // handleWhatsappRedirect();
  }, []);

  //   const isAppInstalled = (urlScheme) => {
  //     const iframe = document.createElement("iframe");
  //     // iframe.style.display = "none";
  //     iframe.src = urlScheme;
  //     document.body.appendChild(iframe);

  //     // const timeout = setTimeout(() => {
  //     //   document.body.removeChild(iframe);
  //     // }, 1000);

  //     // iframe.onload = () => {
  //     //   clearTimeout(timeout);
  //     //   document.body.removeChild(iframe);
  //     // };

  //     // return true; // Assuming WhatsApp is installed, change as needed
  //   };
  //   const handleWhatsappRedirect = async () => {
  //     // Check for WhatsApp installation on desktop browsers
  //     const phoneNumber = "918837849092";
  //     const encodedText = encodeURIComponent("Kindly Click on Send Message Button qr?i=");
  //     const whatsappLink = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedText}`;

  //     window.location.href = whatsappLink;
  //   };
  return (
    <div>
      {/* Your component content */}
      <p>WhatsApp Redirect Page</p>
      {/* <iframe src="https://api.whatsapp.com/send/?phone=9937159477&text=hi"></iframe> */}
      <a href="whatsapp://send/?phone=9937159477&text=hi" target="_blank" rel="noreferrer">
        {" "}
        click
      </a>
      <iframe src="https://api.whatsapp.com/send/?phone=9937159477&text=hi"></iframe>
    </div>
  );
};

export default WhatsAppRedirect;
