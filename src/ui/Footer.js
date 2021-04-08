import React from "react";
import Link from "../Link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
    overflowX: "hidden",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4rem",
    width: "4rem",
    transition: "transform 150ms ease-in-out",
    [theme.breakpoints.down("xs")]: {
      height: "2.5rem",
      width: "2.5rem",
    },
    "&:hover": {
      transform: "scale(0.98)",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6rem",
    right: "1.5rem",
    [theme.breakpoints.down("xs")]: {
      right: "0.6rem",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          className={classes.mainContainer}
          justify="center"
          spacing={2}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column">
              <Grid
                item
                component={Link}
                href="/"
                className={classes.link}
                onClick={() => props.setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                href="/services"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
              >
                Services
              </Grid>

              <Grid
                item
                component={Link}
                href="/customsoftware"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                component={Link}
                href="/mobileapps"
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                href="/websites"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                href="/revolution"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                The Revolution
              </Grid>

              <Grid
                item
                component={Link}
                href="/revolution"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                href="/about"
                className={classes.link}
                onClick={() => props.setValue(3)}
              >
                About Us
              </Grid>

              <Grid
                item
                component={Link}
                href="/about"
                className={classes.link}
                onClick={() => props.setValue(3)}
              >
                Mission Statement
              </Grid>
              <Grid
                item
                component={Link}
                href="/about"
                className={classes.link}
                onClick={() => props.setValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                href="/about"
                className={classes.link}
                onClick={() => props.setValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                href="/contact"
                className={classes.link}
                onClick={() => props.setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        src="/assets/footerAdornment.svg"
        alt="black decortion"
      />
      <Grid
        container
        className={classes.socialContainer}
        justify="flex-end"
        spacing={2}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          target="_blank"
        >
          <img
            src="/assets/facebook.svg"
            alt="Facebook logo"
            className={classes.icon}
          ></img>
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          target="_blank"
        >
          <img
            src="/assets/instagram.svg"
            alt="Instagram logo"
            className={classes.icon}
          ></img>
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          target="_blank"
        >
          <img
            src="/assets/twitter.svg"
            alt="Twitter logo"
            className={classes.icon}
          ></img>
        </Grid>
      </Grid>
    </footer>
  );
}
