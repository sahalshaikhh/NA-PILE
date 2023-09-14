import React from "react";
import WhatsAppLogo from "../../assets/logo/whatsapp.png";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

function WhatsaapComponent() {
  const whatsappPhoneNumber = "9558545798"; // Replace with your WhatsApp phone number
  const whatsappMessage = "Hello, I'm interested in your services."; // Optional predefined message

  // Generate the WhatsApp URL
  const whatsappURL = `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 0 } },
  };

  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <motion.div
          className="your-component fixed bottom-4 right-4 w-8 z-[999999999] "
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Other content of your component */}

          {/* WhatsApp logo with a link */}
          <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
            <img
              src={WhatsAppLogo}
              alt="WhatsApp-logo"
              className="whatsapp-logo"
            />
          </a>
        </motion.div>
      )}
    </VisibilitySensor>
  );
}

export default WhatsaapComponent;
