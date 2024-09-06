import { Box, CircularProgress, Stack } from "@mui/material";
import { isEmpty, isNull } from "lodash";
import PropTypes from "prop-types";
import React from "react";

import Typography from "../components/Typography";
import { VARIANT_TYPOGRAPHY } from "../config/enums";
import { appTheme } from "../config/theme";

const StockDetails = ({ data, loading, query }) => {
  const renderDetails = () => {
    if (isNull(data?.d))
      // if user input is not found
      return (
        <Box
          sx={{
            minHeight: "10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center ",
            padding: "0px 20px",
          }}
        >
          <Typography
            align="center"
            color={appTheme.palette.error.main}
            fontWeight={500}
            label="Stock not found!"
            variant={VARIANT_TYPOGRAPHY.H3}
          />
        </Box>
      );

    return (
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "0px 20px",
        }}
      >
        <Box>
          <Typography
            align="center"
            color={appTheme.palette.primary.main}
            fontWeight={500}
            label={`$ ${data.c}`}
            variant={VARIANT_TYPOGRAPHY.H1}
          />
          <Typography
            align="center"
            color={appTheme.palette.primary.light}
            fontWeight={400}
            label={`${data.dp}%`}
            variant={VARIANT_TYPOGRAPHY.H5}
          />
        </Box>
      </Stack>
    );
  };

  if (loading)
    return (
      <Box
        sx={{
          minHeight: "10rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center ",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Box
      sx={{
        minHeight: "10rem",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center ",
      }}
    >
      {!isEmpty(data) && renderDetails()}
    </Box>
  );
};

StockDetails.default = {
  data: {},
};

StockDetails.propTypes = {
  data: PropTypes.shape({
    d: PropTypes.string,
  }),
  loading: PropTypes.bool,
  query: PropTypes.string,
};
export default StockDetails;
