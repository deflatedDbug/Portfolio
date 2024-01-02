import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledBox = styled("div")({
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rbga(0,0,0,0.1)",
  maxWidth: "400px",
  width: "100%",
});

interface ContactModalProps {
  open: boolean;
  handleClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, handleClose }) => {
  return (
    <StyledModal open={open} onClose={handleClose}>
      <StyledBox>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-around items-start">
            <form className="bg-white p-8 shadow-md rounded-lg">
              <h2 className="text-xl font-bold mb-4">Send Me A Message</h2>
              <div className="mb-4 grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="border-2 rounded p-2"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border-2 rounded p-2"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border-2 w-full rounded p-2"
                />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    className="border-2 w-full rounded p-2"
                  />
                </div>
                <div>
                  <textarea placeholder="Leave a message" className="border-2 w-full rounded p-2"></textarea>
                </div>

                <button type="submit" className="mt-4 w-full bg-green-500 text-white p-3 rounded hover:bg-green-600">
                  Send Message
                </button>
            </form>
          </div>
        </div>
      </StyledBox>
    </StyledModal>
  );
};

export default ContactModal;
