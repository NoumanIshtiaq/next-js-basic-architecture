import { MediaCards } from "@/components/cards/media-cards/media-card";
import { Grid2 } from "@mui/material";
import { serviceListData } from "./service-list.data";

export const ServiceList = () => {
  return (
    <Grid2 container spacing={2}>
      {serviceListData?.map((item: any) => (
        <Grid2 size={{ xs: 12, md: 6 }} key={item?._id}>
          <MediaCards
            heading={item?.heading}
            imageSrc={item?.avatarSrc?.src}
            description={item?.description}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};
