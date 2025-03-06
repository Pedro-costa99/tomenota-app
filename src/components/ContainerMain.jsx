import React, { useEffect, useState } from "react";
import DetailsTabList from "./DetailsTabList";
import EpisodeTabList from "./EpisodeTabList";
import { Grid2 as Grid, Box, Typography } from "@mui/material";
import { fetchShowDetails } from "../services/api";

const ContainerMain = () => {
  const [dataDetails, setDataDetails] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchShowDetails().then((data) => setDataDetails(data));
  }, []);

  useEffect(() => {
    if (!dataDetails?.Images?.Background) return;

    const img = new Image();
    img.src = dataDetails?.Images?.Background;
    img.onload = () => setLoaded(true);
  }, [dataDetails?.Images?.Background]);

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: loaded ? "transparent" : "rgb(21 22 26)",
          filter: loaded ? "none" : "blur(10px)",
          backgroundImage: loaded
            ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${dataDetails?.Images?.Background})`
            : "rgb(21 22 26)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          transition: "background-image 0.5s ease-in-out",
          zIndex: -1,
          color: "white",
          minHeight: "100vh",
        }}
      >
        <Grid
          size={{ xs: 12, md: 7, lg: 8 }}
          sx={{
            display: "grid",
            gridTemplateRows: "auto auto",
            padding: 4,
            gap: 2,
            height: "200px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              gridRow: "1",
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              color: "white",
              margin: 1,
              marginLeft: 2,
            }}
          >
            {dataDetails && dataDetails.Title}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              gridRow: "2",
              fontWeight: "normal",
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              color: "#B0B0B0",
              marginLeft: 2,
            }}
          >
            80% INDICADO / CIENCIA FICCIÓN / {dataDetails && dataDetails.Year} /
            EUA / 14
          </Typography>
        </Grid>

        <Grid
          container
          spacing={4}
          size={{ xs: 12, md: 5, lg: 4 }}
          sx={{
            justifyContent: { xs: "center", md: "flex-start" },
            overflowY: "auto",
            height: { xs: "50vh", md: "85vh" },
          }}
        >
          <Grid sx={{ backgroundColor: "transparent", px: 2 }}>
            <EpisodeTabList />
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            alignItems: "flex-end",
          }}
        >
          <Grid sx={{ backgroundColor: "rgb(21 22 26)", width: "100vw", p: 2 }}>
            <DetailsTabList {...dataDetails} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContainerMain;
