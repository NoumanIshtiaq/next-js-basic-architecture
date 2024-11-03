"use client";
import { Avatar, Box, Button } from "@mui/material";
import Link from "next/link";
import { ROUTES } from "@/constant/routes";
import { MenuItem } from "../menu-item/menu-item";

export const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: 1,
        gap: 2,
        p: 2,
        flexDirection: { xs: "column", sm: "row" },
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
      <MenuItem />
      <Link href={ROUTES?.REGISTER}>
        <Button color="primary" variant="contained">
          Register Now
        </Button>
      </Link>
    </Box>
  );
};
