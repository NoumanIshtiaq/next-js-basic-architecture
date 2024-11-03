import { Box } from "@mui/material";
import { ServiceList } from "./service-list/service-list";
import { ServicesInfo } from "./services-info/services-info";
import { MediaCards } from "@/components/cards/media-cards/media-card";
import { serviceListData } from "./service-list/service-list.data";

export const Services = () => {
  return (
    <>
      <ServicesInfo />
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <ServiceList />
      </Box>
      <MediaCards
            heading={serviceListData?.[0]?.heading}
            imageSrc={serviceListData?.[0]?.avatarSrc?.src}
            description={serviceListData?.[0]?.description}
          />
    </>
  );
};
