import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import React from "react";
import {
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail,
} from "./components";
// import VideoDetail from "./components/VideoDetail";
// import ChannelDetail from "./components/ChannelDetail";
// import SearchFeed from "./components/SearchFeed";
// import Feed from "./components/Feed";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/video/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
};

export default App;
