import { Button } from "@mui/material";
import React from "react";

function PopupMessage({ message, onClose }) {
  return (
    <div className="popup-message">
      <div className="popup-content">
        <p className="text-xs">{message}</p>
        <Button onClick={onClose} sx={{ fontSize: "12px" }}>
          Close
        </Button>
      </div>
    </div>
  );
}

export default PopupMessage;
