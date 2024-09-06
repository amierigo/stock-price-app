import { Box, Paper } from "@mui/material";
import axios from "axios";
import { useState } from "react";

import { Container } from "@mui/system";
import Typography from "../components/Typography";
import { VARIANT_TYPOGRAPHY } from "../config/enums";
import { appTheme } from "../config/theme";
import SearchBar from "./SearchBar";
import StockDetails from "./StockDetails";

const StockPrice = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = process.env.REACT_APP_STOCK_PRICE_API_KEY;
  const API_URL = process.env.REACT_APP_API_URL;

  const searchStock = async (symbol) => {
    try {
      setLoading(true);
      setError("");
      const { data } = await axios.get(
        `${API_URL}/quote?symbol=${symbol}&token=${API_KEY}`
      );

      setData(data);
    } catch (err) {
      const { error } = err?.response?.data;
      if (error) setError(error);
      else setError("Someting went wrong.");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) searchStock(query.toUpperCase());
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: appTheme.palette.background.default,
        padding: "0px !important",
      }}
    >
      <Box>
        <Box mt={10} mb={2}>
          <Typography
            align="center"
            color={appTheme.palette.primary.light}
            fontWeight={700}
            label="All Stocks"
            variant={VARIANT_TYPOGRAPHY.H1}
          />
        </Box>
        <Typography
          align="center"
          color={appTheme.palette.secondary.primary}
          fontWeight={400}
          label="Find and track your favorite stocks"
          variant={VARIANT_TYPOGRAPHY.H5}
        />
        {/* Display search bar */}
        <Box my={2}>
          <SearchBar
            error={error}
            handleSearch={handleSearch}
            setQuery={setQuery}
          />
        </Box>
        {/* Display stock details */}
        <Paper elevation={3} sx={{ background: appTheme.palette.text.primary }}>
          <StockDetails data={data} loading={loading} query={query} />
        </Paper>
      </Box>
    </Container>
  );
};

export default StockPrice;
