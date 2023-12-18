import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import { Black_Ops_One } from "next/font/google";
import ThemeContextProvider from "@/context/theme-context";

interface ContactModalProps {
  open: boolean;
  handleClose: () => void;
}

interface FormDataProps {
    name: string;
    email: string;
    message: string;

}

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
});

const StyledBox = styled(Box)({
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rbga(0,0,0,0.1)',
    maxWidth: '400px',
    width: '100%',
    '& form' : {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
});


const ContactModal: React.FC<ContactModalProps> = ({ open, handleClose }) => {
    const [formData, setFormData] = useState<FormDataProps>({name: "", email:"", message:""});
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value } = event.target;
        setFormData(prev => ({...prev, [name]: value}))
    }
  return (
    <StyledModal open={open} onClose={handleClose}>
      <StyledBox>
        <Typography variant="h6" component="h2" style={{ marginBottom: '20px' }}>
            Contact Form
        </Typography>
        <form>
          <TextField label="Name" variant="outlined" name="name" value={formData.name} onChange={handleInputChange} fullWidth/>
          <TextField label="Email" variant="outlined" type="email" name="email" value={formData.email} onChange={handleInputChange} fullWidth/>
          <TextField label="Message" variant="outlined" multiline rows={4} name="message" value={formData.message} onChange={handleInputChange} fullWidth/>

          <Button type="submit" size="medium" endIcon={<SendIcon />}>Submit</Button>
        </form>
      </StyledBox>
    </StyledModal>
  );
};

export default ContactModal;
