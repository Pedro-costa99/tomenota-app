import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Card, Grid2 as Grid } from "@mui/material";
import {
  RadioButtonChecked,
  SentimentDissatisfied,
  Share,
  Add,
} from "@mui/icons-material";

const DetailsTabList = ({ Synopsis, Cast }) => {
  console.log("Cast", Cast);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        textColor="inherit"
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        sx={{
          marginLeft: "-4px",
          color: "white",
          justifyContent: "flex-start",
          "& .MuiTabs-scroller": {
            borderBottom: "1px solid white",
          },
        }}
      >
        <Tab
          label="General"
          sx={{
            marginRight: 4,
            color: "white",
            alignItems: "flex-start",
            p: 0,
          }}
        />
        <Tab
          label="Elenco"
          sx={{
            marginRight: 4,
            color: "white",
            alignItems: "flex-start",
            p: 0,
          }}
        />
        <Tab
          label="Principales Premios"
          sx={{
            marginRight: 3,
            color: "white",
            alignItems: "flex-start",
            p: 0,
          }}
        />
      </Tabs>

      {tabValue === 0 && (
        <Box
          sx={{
            p: 2,
            overflowX: "auto",
            whiteSpace: "nowrap",
            marginLeft: 1,
            height: "80px",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ flexWrap: "nowrap", display: "flex" }}
          >
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minWidth: 80,
                color: "#B0B0B0",
              }}
            >
              <Add fontSize="large" sx={{ mb: 1 }} />
              <Typography variant="caption">Mi Lista</Typography>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minWidth: 80,
                color: "#B0B0B0",
              }}
            >
              <SentimentDissatisfied fontSize="large" sx={{ mb: 1 }} />
              <Typography variant="caption">Evaluar</Typography>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minWidth: 80,
                color: "#B0B0B0",
              }}
            >
              <RadioButtonChecked fontSize="large" sx={{ mb: 1 }} />
              <Typography variant="caption">Grabar</Typography>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minWidth: 80,
                color: "#B0B0B0",
              }}
            >
              <Share fontSize="large" sx={{ mb: 1 }} />
              <Typography variant="caption">Compartir</Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 2,
                color: "#B0B0B0",
              }}
            >
              <Typography variant="body2">SINOPSIS</Typography>
              <Typography
                variant="body2"
                sx={{
                  maxWidth: "100%",
                  whiteSpace: "normal",
                }}
              >
                {Synopsis}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
      {tabValue === 1 && (
        <Box
          sx={{
            p: 2,
            height: "80px",
            overflowX: "auto",
            whiteSpace: "nowrap",
            marginLeft: 4,
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexWrap: "nowrap",
            }}
          >
            {Cast?.map((actor) => (
              <Grid item xs="auto" key={actor.ID} sx={{ flexShrink: 0 }}>
                <Card
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#B0B0B0",
                    background: "rgb(30 31 33)",
                    borderRadius: 0,
                  }}
                >
                  <Typography variant="body2">{actor?.Name}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      {tabValue === 2 && (
        <Box sx={{ p: 2, height: "80px", marginLeft: 6, color: "#B0B0B0" }}>
          <Typography variant="body2">Información no disponible</Typography>
        </Box>
      )}
    </>
  );
};

export default DetailsTabList;
