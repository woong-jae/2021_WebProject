import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SelectDate from "../common/SelectDate";
import "./Sections/LandingPage.scss";

export default function LandingPage() {
  return (
    <>
      <div className="logo"></div>
      <div className="userinput">
        <Grid container justify="space-around">
          <form noValidate autoComplete="off">
            <TextField label="산/지역명"></TextField>
            <SelectDate></SelectDate>
            <TextField
              label="동행 인원"
              type="number"
              defaultValue="0"
              inputProps={{ min: 0 }}
              InputLabelProps={{ shrink: true }}
            ></TextField>
            <Link to="/list">
              <Button
                className="search-btn"
                variant="contained"
                startIcon={<SearchIcon />}
              ></Button>
            </Link>
          </form>
        </Grid>
      </div>
    </>
  );
}
