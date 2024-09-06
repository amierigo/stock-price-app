import { Box, FormControl, Stack, TextField } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import Button from "../components/Button";
import { VARIANT } from "../config/enums";

const SearchBar = ({ error, handleSearch, query, setQuery }) => {
  return (
    <form onSubmit={handleSearch}>
      <Stack direction="row" spacing={2}>
        <FormControl fullWidth>
          <TextField
            error={error ? true : false}
            id="search"
            helperText={error}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter stock symbol...(e.g., AAPL)"
            type="text"
            value={query}
            variant={VARIANT.STANDARD}
          />
        </FormControl>
        <Box mt={2}>
          <Button text="Search" variant={VARIANT.CONTAINED} type="submit" />
        </Box>
      </Stack>
    </form>
  );
};

SearchBar.propTypes = {
  error: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
};

export default SearchBar;
