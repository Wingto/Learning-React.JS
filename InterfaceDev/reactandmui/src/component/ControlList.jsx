import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function ListHeader() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper"
      }}
      subheader={<ListHeader>Control</ListHeader>}
    ></List>
  );
}

export default ListHeader;
