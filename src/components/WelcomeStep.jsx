import React from "react";
import logo from "../assets/LOGO.png";
import { Box, Typography, Button } from "@mui/material";

const WelcomeStep = ({ nextStep }) => {
  return (
    <Box
      sx={{
        background: "#EFF6FF",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "600px",
          width: "90%",
          maxWidth: "1000px",
          borderRadius: "20px",
          p: 1
        }}
      >
        <img
          src={logo}
          alt="Welcome"
          style={{ width: "189px", marginBottom: "32px", height: "54px" }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: 1,
            letterSpacing: 0,
            textAlign: "center",
            verticalAlign: "middle",
            marginBottom: "16px",
            color: "#353535",
          }}
        >
          Bem !
        </Typography>
        <Typography
          variant="body1"
          sx={{
            padding: "8px",
            marginBottom: "16px",
          }}
        >
          Estamos muito felizes em ter você em nossa equipe! <br />
          Preencha as perguntinhas a seguir para escolher o seu presente! 🎁
        </Typography>

        <Button
          variant="contained"
          onClick={nextStep}
          sx={{
            width: "104px",
            height: "43px",
            paddingTop: "12px",
            paddingRight: "20px",
            paddingBottom: "12px",
            paddingLeft: "20px",
            gap: "8px",
            borderRadius: "61px",
            fontSize: "14px",
            backgroundColor: "#22007F",
            textTransform: "none",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#22007F",
            },
          }}
        >
          Começar!
        </Button>
      </Box>
    </Box>
  );
};

export default WelcomeStep;
