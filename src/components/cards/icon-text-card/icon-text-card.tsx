import { Avatar, Box, Typography } from "@mui/material";

export const IconTextCard = (props: any) => {
  const {
    heading,
    imageSrc,
    description,
    avatarSize = { width: 30, height: 30, variant: "circular" },
  } = props;
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Avatar
        src={imageSrc}
        alt={heading}
        sx={{ width: avatarSize?.width ?? 30, height: avatarSize?.height }}
        variant={avatarSize?.variant ?? "circular"}
      />
      <Box>
        <Typography>{heading}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
};
