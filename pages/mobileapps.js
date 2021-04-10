import React from "react";
import Head from "next/head";
import Link from "../src/Link";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import integrationAnimation from "../src/animations/integrationAnimation/data.json";

import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },

  rowContainer: {
    paddingLeft: "5rem",
    paddingRight: "5rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    },
  },
}));

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          iOS/Android App Design and Development | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Mobile Apps Made Easy | Our cutting-edge mobile app development process lets us build beautifully designed, carefully crafted apps for both iOS and Android."
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | iOS/Android App Development"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://material-ui-arc-teal.vercel.app/mobileapps"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://material-ui-arc-teal.vercel.app/mobileapps"
        />
      </Head>
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid item style={{ marginRight: "1em", marginLeft: "-3.5em" }}>
            <IconButton
              component={Link}
              href="/customsoftware"
              onClick={() => props.setSelectedIndex(1)}
              style={{ backgroundColor: "transparent" }}
            >
              <img
                src="/assets/backArrow.svg"
                alt="Back to custom software page"
              />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography
              variant="h2"
              align={matchesMD ? "center" : undefined}
              style={{ lineHeight: matchesSM ? 1.2 : "inherit" }}
            >
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item>
            <IconButton
              component={Link}
              href="/websites"
              onClick={() => props.setSelectedIndex(3)}
              style={{ backgroundColor: "transparent" }}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="forward to websites page"
              ></img>
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : undefined}
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : undefined}
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie
            options={defaultOptions}
            style={{
              maxWidth: matchesMD ? "15em" : "20em",
              marginBottom: "5em",
              height: matchesMD ? "20em" : undefined,
            }}
          />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              variant="h4"
              align={matchesSM ? "center" : "right"}
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : "right"}
              paragraph
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : "right"}
              paragraph
            >
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{
          marginBottom: "15em",
          display: matchesMD ? "grid" : undefined,
        }}
      >
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/swissKnife.svg" alt="swiss army knife" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          style={{
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0,
          }}
          md
        >
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src="/assets/extendAccess.svg"
              alt="tear-one-off sign"
              style={{ maxWidth: matchesXS ? "18em" : "28em" }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img
              src="/assets/increaseEngagement.svg"
              alt="app with notification"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
