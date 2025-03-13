import React from "react";
import logo from "../assets/LOGO.png";
import { Box, Typography } from "@mui/material";

const CompletionStep = () => {
  return (
    <Box
      sx={{
        background: "#EFF6FF",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "600px",
          width: "90%",
          maxWidth: "1000px",
          borderRadius: "20px",
          background: "white",
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
          Presente resgatado! 🎉🥳
        </Typography>
        <Typography
          variant="body1"
          sx={{
            padding: "8px",
            marginBottom: "16px",
          }}
        >
          Seu pedido está em andamento!! <br />E não se preocupe, as alterações
          de status do envio chegam todas em seu e-mail! 🎁
        </Typography>
      </Box>
    </Box>
  );
};

export default CompletionStep;
