import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledTypography = styled(Typography)(
  ({ color, fontWeight = 500, textTransform = "inherit", theme }) => ({
    color: color || theme.palette.text.primary,
    fontWeight: `${fontWeight} !important`,
    textTransform: `${textTransform} !important`,

    "&.MuiTypography-h1": {
      font: theme.typography.h1.font,
    },
    "&.MuiTypography-h2": {
      font: theme.typography.h2.font,
    },
    "&.MuiTypography-h3": {
      font: theme.typography.h3.font,
    },
    "&.MuiTypography-h4": {
      font: theme.typography.h4.font,
    },
    "&.MuiTypography-h5": {
      font: theme.typography.h5.font,
    },
    "&.MuiTypography-h6": {
      font: theme.typography.h6.font,
    },
    "&.MuiTypography-p": {
      font: theme.typography.p.font,
    },
    "&.MuiTypography-caption": {
      font: theme.typography.caption.font,
    },
  })
);

export default StyledTypography;
