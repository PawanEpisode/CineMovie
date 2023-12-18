import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top-rated" },
  { label: "Upcoming", value: "upcoming" },
];

const Democategories = [
  { label: "Comedy", value: "comedy" },
  { label: "Action", value: "action" },
  { label: "Horror", value: "horror" },
  { label: "Animation", value: "animation" },
];
const redLogo =
  "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
const blueLogo =
  "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

const SideBar = ({ setMobileOpen }) => {
  const theme = useTheme();

  return (
    <>
      <Link to={"/"} className="flex justify-center px-0 py-[10%]">
        <img
          className="w-[70%]"
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="cinemovie logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={`text-[${theme.palette.text.primary}] no-underline`} to={"/"}>
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <img src={redLogo} width={'100px'} className={`${theme.palette.mode === 'dark' ? "filter-none": "invert"}`} />
              </ListItemIcon> */}
              <ListItemText primary={label}/>
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {Democategories.map(({ label, value }) => (
          <Link key={value} className={`text-[${theme.palette.text.primary}] no-underline`} to={"/"}>
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <img src={redLogo} width={'100px'} className={`${theme.palette.mode === 'dark' ? "filter-none": "invert"}`} />
              </ListItemIcon> */}
              <ListItemText primary={label}/>
            </ListItemButton>
          </Link>
        ))}
      </List>
    </>
  );
};

export default SideBar;
