"use client";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { MenuItem } from "../menu-item/menu-item";
import { contactInfo } from "./footer.data";

export const Footer = () => {

  const currentYear = new Date()?.getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        gap:3
      }}
    >
      <Avatar
        sx={{
          width: 100,
          height: 30,
        }}
        alt="logo"
        src={""}
        variant="rounded"
      />
      <MenuItem color="common.white"/>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {contactInfo?.map((item: any) => (
          <Box key={item?._id}>
            <Typography color="common.white" variant="subtitle2">
              {item?.name}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={2}
        flexWrap={"wrap"}
      >
        <Typography color="common.white">
          @ {currentYear} Health solution All right reserved
        </Typography>
        <Box>
          <MenuItem isPrimaryMenu={false} color="common.white"/>
        </Box>
      </Box>
    </Box>
  );
};
