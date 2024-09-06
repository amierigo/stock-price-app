import PropTypes from "prop-types";
import React from "react";

import { CircularProgress } from "@mui/material";
import { SIZE, VARIANT } from "../../config/enums";
import StyledButton from "./styles";

const Button = ({
  color,
  disabled = false,
  fontWeight = 500,
  fullWidth = true,
  hasIcon = false,
  icon,
  id,
  loading = false,
  onClick,
  size = SIZE.MD,
  text,
  type,
  variant = VARIANT.CONTAINED,
  ...props
}) => {
  return (
    <StyledButton
      disabled={disabled}
      variant={variant}
      fullWidth={fullWidth}
      color={color}
      onClick={onClick}
      type={type}
      id={id}
      fontWeight={fontWeight}
      data={text}
      size={size}
      {...props}
    >
      {loading ? <CircularProgress /> : text}
    </StyledButton>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  fontWeight: PropTypes.number,
  fullWidth: PropTypes.bool,
  hasIcon: PropTypes.bool,
  icon: PropTypes.node,
  id: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  whitespace: PropTypes.string,
};
export default Button;
