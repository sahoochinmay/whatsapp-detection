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

  return (
    <div>
      {/* Your component content */}
      <p>WhatsApp Redirect Page</p>
      <iframe src="https://api.whatsapp.com/send/?phone=918837849092&text=Kindly+Click+on+Send+Message+Button+qr%3Fi%3D&type=phone_number&app_absent=0"></iframe>
    </div>
  );
};

export default WhatsAppRedirect;
