import { Box } from "@mui/material";
import { ServiceList } from "./service-list/service-list";

export const Services = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <ServiceList />
    </Box>
  );
};
