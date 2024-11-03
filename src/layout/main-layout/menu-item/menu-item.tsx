import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { primaryMenuItem, secondaryMenuItem } from "./menu-items.data";

export const MenuItem = (props: any) => {
  const { isPrimaryMenu = true, color = "textColor.tertiary" } = props;

  const menuItem = isPrimaryMenu ? primaryMenuItem : secondaryMenuItem;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        flexWrap: "wrap",
      }}
    >
      {menuItem?.map((menuItem: any) => (
        <Box key={menuItem?._id}>
          <Link href={menuItem?.link} style={{ textDecoration: "none" }}>
            <Typography color={color} variant="subtitle2">
              {menuItem?.name}
            </Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
};
