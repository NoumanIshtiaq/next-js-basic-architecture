import { MediaCards } from "@/components/cards/media-cards/media-card";
import { Grid2 } from "@mui/material";
import { serviceInfoData } from "./services-info.data";
import IconTextCard from "@/components/cards/icon-text-card/icon-text-card";

export const ServicesInfo = () => {
  return (
    <Grid2 container spacing={2}>
      {serviceInfoData?.map((item: any) => (
        <Grid2 size={{ xs: 12, md: 3 }} key={item?._id}>
          <IconTextCard
            heading={item?.heading}
            imageSrc={item?.avatarSrc?.src}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};
