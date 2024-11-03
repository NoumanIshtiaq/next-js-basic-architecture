import { Avatar, Box, Typography } from "@mui/material";

export const MediaCards = (props: any) => {
  const { heading, imageSrc, description } = props;
  return (
    <Box>
      <Typography>{heading}</Typography>
      <Avatar src={imageSrc} alt={heading} sx={{ width: "100%", height:'400px' }} variant="rounded"/>
      <Typography>{description}</Typography>
    </Box>
  );
};
