import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Checkbox,
  Grid2 as Grid,
} from "@mui/material";
import logo from "../assets/lobbyimg.png";

const presents = [
  {
    id: 1,
    title: "Presente 1",
    description: "Descrição do presente 1",
    imageUrl: "path_to_image_1.jpg",
  },
  {
    id: 2,
    title: "Presente 2",
    description: "Descrição do presente 2",
    imageUrl: "path_to_image_2.jpg",
  },
  {
    id: 3,
    title: "Presente 3",
    description: "Descrição do presente 3",
    imageUrl: "path_to_image_3.jpg",
  },
];

const SelectionStep = ({ nextStep, prevStep }) => {
  return (
    <Box
      sx={{
        padding: 2,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#EFF6FF",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          borderRadius: "20px",
          width: "90%",
          maxWidth: "1000px",
          alignContent: "center",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: 1,
            wordSpacing: 0,
            verticalAlign: "middle",
            color: "#353535",
            p: 1,
            pb: 0,
            pt: 4
          }}
        >
          Escolha o seu presente! 🎁
        </Typography>

        <Box
          sx={{
            display: "flex",
            background: "",
            borderRadius: "20px",
            padding: "40px",
            minHeight: "600px",
          }}
        >
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            {presents.map((present) => (
              <Grid
                item
                key={present.id}
              >
                <Card
                  sx={{
                    width: "100%",
                    height: "335.33px",
                    borderRadius: "6px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "center",
                    border: "0.5px solid #D8DCE2",
                    padding: "16px",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <CardActions
                      sx={{
                        padding: 0,
                        position: "absolute",
                        top: 0,
                        right: 0,
                        zIndex: 1,
                      }}
                    >
                      <Checkbox
                        sx={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          border: "1px solid #000",
                          "& .MuiSvgIcon-root": {
                            color: "transparent",
                          },
                          "&.Mui-checked": {
                            backgroundColor: "transparent",
                            borderColor: "#000",
                            "& .MuiSvgIcon-root": {
                              color: "#000",
                            },
                          },
                        }}
                      />
                    </CardActions>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        height: "261px",
                        marginTop: "20px",
                      }}
                    >
                      <img
                        src={logo}
                        alt={present.title}
                        height={261}
                        style={{
                          width: "auto",
                          height: "260px",
                          borderRadius: "6px",
                        }}
                      />
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: 1,
                        verticalAlign: "middle",
                        color: "#353535",
                        letterSpacing: 0,
                      }}
                    >
                      {present.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", p: 3 }}
        >
          <Button
            variant="outlined"
            onClick={prevStep}
            sx={{
              width: 81,
              height: 43,
              gap: 1,
              paddingTop: "12px",
              paddingRight: "20px",
              paddingBottom: "12px",
              paddingLeft: "20px",
              borderRadius: "61px",
              borderWidth: "1px",
              borderColor: "#64748B",
              color: "#64748B",
              fontSize: "14px",
              textTransform: "none",
              marginLeft: "18px"
            }}
          >
            Voltar
          </Button>

          <Button
            variant="contained"
            onClick={nextStep}
            sx={{
              width: 108,
              height: 43,
              gap: 1,
              paddingTop: "12px",
              paddingRight: "20px",
              paddingBottom: "12px",
              paddingLeft: "20px",
              borderRadius: "61px",
              backgroundColor: "#22007F",
              color: "#FFFFFF",
              textTransform: "none",
              fontSize: "14px",
              lineHeight: 1,
              marginRight: "21px"
            }}
          >
            Continuar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectionStep;
