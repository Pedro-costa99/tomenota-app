import { useEffect, useState } from "react";
import { fetchEpisodes } from "../services/api";
import {
  Tabs,
  Tab,
  Box,
  List,
  ListItem,
  Typography,
  CardMedia,
  Collapse,
  IconButton,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const EpisodeTabList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [season, setSeason] = useState(1);
  const [expandedEpisode, setExpandedEpisode] = useState(null);

  useEffect(() => {
    fetchEpisodes().then(setEpisodes);
  }, []);

  const seasons = [
    ...new Set(episodes.map((ep) => ep?.SeasonNumber).filter(Boolean)),
  ];

  const handleChange = (event, newValue) => {
    setSeason(newValue);
    setExpandedEpisode(null);
  };

  const handleEpisodeClick = (episodeId) => {
    setExpandedEpisode(expandedEpisode === episodeId ? null : episodeId);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        marginTop: { md: "200px" },
        width: { xs: "100%", md: "95%" },
        backgroundColor: "transparent",
      }}
    >
      <Tabs
        value={season}
        onChange={handleChange}
        variant="scrollable"
        textColor="inherit"
        scrollButtons="auto"
        sx={{
          marginLeft: -1,
          color: "white",
          "& .MuiTabs-scroller": {
            borderBottom: "1px solid #B0B0B0",
          },
        }}
      >
        {seasons.map((s) => (
          <Tab
            key={s}
            label={`T${s}`}
            value={s}
            sx={{
              color: "white",
            }}
          />
        ))}
      </Tabs>
      <List>
        {episodes
          .filter((ep) => ep?.SeasonNumber === season)
          .map((ep) => (
            <ListItem
              key={ep.ID}
              onClick={() => handleEpisodeClick(ep.ID)}
              sx={{
                cursor: "pointer",
                borderBottom: "1px solid #B0B0B0",
                flexDirection: "column",
                display: "flex",
                justifyContent: "space-between",
                color: "white",
                backgroundColor: "transparent",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flex: 1,
                  width: "100%",
                  p: 1,
                }}
              >
                <Typography variant="body2" sx={{ mr: 2 }}>
                  {ep.EpisodeNumber}
                </Typography>
                <Typography variant="body1">{ep.Title}</Typography>
                <IconButton
                  onClick={() => handleEpisodeClick(ep.ID)}
                  sx={{
                    color: "white",
                    padding: "4px",
                    marginLeft: "auto",
                  }}
                >
                  <PlayArrowIcon />
                </IconButton>
              </Box>

              <Collapse in={expandedEpisode === ep.ID}>
                <Box sx={{ pl: 2, pt: 1, width: "100%", maxWidth: 400 }}>
                  <CardMedia
                    component="img"
                    image={ep.Image}
                    alt={ep.Title}
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "4px",
                      mb: 1,
                      alignItems: "center",
                    }}
                  />
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {ep.Synopsis}
                  </Typography>
                </Box>
              </Collapse>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default EpisodeTabList;
