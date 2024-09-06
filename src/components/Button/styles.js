import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(
  ({ theme, disabled, fontWeight, textTransform }) => ({
    padding: "6px 12px",
    lineHeight: 1.5,
    border: "none !important",
    borderRadius: "6px",
    fontWeight: `${fontWeight} !important`,
    textTransform: `${textTransform} !important`,
    boxShadow: theme.palette.boxShadow.primary,

    "&:disabled": {
      boxShadow: "none",
      opacity: !disabled ? 1 : 0.5,
    },

    "&:active": {
      boxShadow: "none",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },

    "&.MuiButton-containedPrimary": {
      background: theme.palette.primary.main,
      color: theme.palette.text.primary,
    },

    "&.MuiButton-containedSecondary": {
      background: theme.palette.secondary.main,
      color: theme.palette.text.primary,
    },

    "&.MuiButton-containedInfo": {
      background: theme.palette.secondary.dark,
      color: theme.palette.text.primary,
    },

    "&.MuiButton-outlinedPrimary": {
      border: `1px solid ${theme.palette.secondary.main} !important`,
      background: "transparent",
      color: theme.palette.secondary.main,
    },

    "&.MuiButton-containedSizeLarge": {
      font: theme.typography.h3.font,
      minHeight: "2em",
    },

    "&.MuiButton-containedSizeMedium": {
      font: theme.typography.h4.font,
      minHeight: "1.4375em",
    },

    "&.MuiButton-containedSizeSmall": {
      font: theme.typography.p.font,
      minHeight: "1em",
    },

    "&.MuiButton-outlinedSizeLarge": {
      font: theme.typography.h3.font,
      minHeight: "2em",
    },

    "&.MuiButton-outlinedSizeMedium": {
      font: theme.typography.h4.font,
      minHeight: "1.4375em",
    },

    "&.MuiButton-outlinedSizeSmall": {
      font: theme.typography.p.font,
      minHeight: "1em",
    },
  })
);

export default StyledButton;
