import PropTypes from "prop-types";
import React from "react";

import { TEXT_TRANSFORM } from "../../config/enums";
import StyledTypography from "./styles";

const Typography = ({
  align,
  color,
  fontWeight,
  label,
  textTransform,
  variant,
  ...rest
}) => {
  return (
    <StyledTypography
      align={align}
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      textTransform={textTransform}
      {...rest}
    >
      {label}
    </StyledTypography>
  );
};

Typography.default = {
  color: "",
  fontWeight: 500,
  textTransform: TEXT_TRANSFORM.NORMAL,
};

Typography.propTypes = {
  align: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  label: PropTypes.string.isRequired,
  textTransform: PropTypes.string,
  variant: PropTypes.string.isRequired,
};

export default Typography;
