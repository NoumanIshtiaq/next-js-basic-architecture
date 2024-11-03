import { Typography } from '@mui/material';

const CustomLabel = (props: any) => {
  const { label, required = false, marginBottom = 1 } = props;
  return (
    <Typography
      sx={{
        color: 'textColor.tertiary',
        marginBottom: marginBottom,
      }}
      variant="body2"
    >
      {label}{' '}
      {required && (
        <Typography color={'error.main'} component="span">
          *{' '}
        </Typography>
      )}
    </Typography>
  );
};

export default CustomLabel;
