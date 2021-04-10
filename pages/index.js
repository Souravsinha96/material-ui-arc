import React from "react";
import Head from "next/head";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Lottie from "react-lottie";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../src/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import CallToAction from "../src/ui/CallToAction";

import animationData from "../src/animations/landinganimation/data";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: "50px",
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "1rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.75rem",
    height: 35,
    padding: "5px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: "25px",
    },
  },
  revolutionBackground: {
    backgroundImage: `url("/assets/repeatingBackground.svg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[20],
    borderRadius: "25px",
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0",
      borderRadius: 0,
      width: "100%",
    },
  },
  infobackground: {
    backgroundImage: `url("/assets/infoBackground.svg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80em",
    width: "100%",
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title key="title">
          Custom Software, Mobile Apps, and Websites | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Pristine software custom-designed from the ground up with cutting-edge optimizations. Use our free estimate calculator to check your project cost!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Arc Development"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://material-ui-arc-teal.vercel.app"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://material-ui-arc-teal.vercel.app"
        />
      </Head>
      <Grid item>
        {" "}
        {/*-----Hero Block-----*/}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  component={Link}
                  href="/estimate"
                  className={classes.estimateButton}
                  variant="contained"
                  onClick={() => props.setValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  href="/revolution"
                  onClick={() => props.setValue(2)}
                  variant="outlined"
                  className={classes.learnButtonHero}
                >
                  <span style={{ marginRight: "5px" }}>Learn More</span>
                  <ButtonArrow
                    height={15}
                    width={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {""}
        {/*-----Custom Software Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              href="/customsoftware"
              onClick={() => {
                props.setValue(5);
                props.setSelectedIndex(1);
              }}
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: "5px" }}>Learn More</span>
              <ButtonArrow
                height={15}
                width={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="custom software icon"
              src="/assets/CustomSoftware.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {""}
        {/*-----Mobile Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              component={Link}
              href="/mobileapps"
              onClick={() => {
                props.setValue(5);
                props.setSelectedIndex(2);
              }}
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: "5px" }}>Learn More</span>
              <ButtonArrow
                height={15}
                width={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid
            item
            style={{
              marginRight: matchesSM ? 0 : "5em",
            }}
          >
            <img
              className={classes.icon}
              alt="mobile phone icon"
              src="/assets/mobileIcon.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {""}
        {/*-----Webistes Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              href="/websites"
              onClick={() => {
                props.setValue(5);
                props.setSelectedIndex(3);
              }}
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: "5px" }}>Learn More</span>
              <ButtonArrow
                height={15}
                width={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="website icon"
              src="/assets/websiteIcon.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Revolution Block-----*/}
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: matchesSM ? "60em" : "100em", marginTop: "12em" }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary Insights coupled with cutting edge technology is a
                    recipe for revolution
                  </Typography>
                  <Button
                    component={Link}
                    href="/revolution"
                    onClick={() => props.setValue(2)}
                    variant="outlined"
                    className={classes.learnButtonHero}
                    style={{ marginTop: "20px" }}
                  >
                    <span style={{ marginRight: "5px" }}>Learn More</span>
                    <ButtonArrow
                      height={15}
                      width={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground}></div>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Information Block-----*/}
        <Grid
          container
          direction="row"
          alignItems="center"
          className={classes.infobackground}
        >
          <Grid
            container
            item
            style={{ textAlign: matchesXS ? "center" : "inherit" }}
            direction={matchesXS ? "column" : "row"}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
            >
              <Grid
                container
                direction="column"
                style={{ marginBottom: matchesXS ? "10em" : 0 }}
              >
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    href="/about"
                    onClick={() => props.setValue(3)}
                    variant="outlined"
                    className={classes.learnButton}
                    style={{
                      marginTop: "5px",
                      borderColor: "white",
                      color: "white",
                    }}
                  >
                    <span style={{ marginRight: "5px" }}>Learn More</span>
                    <ButtonArrow height={15} width={15} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">Say hello!🖐</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    href="/contact"
                    onClick={() => props.setValue(4)}
                    variant="outlined"
                    className={classes.learnButton}
                    style={{
                      marginTop: "5px",
                      borderColor: "white",
                      color: "white",
                    }}
                  >
                    <span style={{ marginRight: "5px" }}>Learn More</span>
                    <ButtonArrow height={15} width={15} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----CTA Block-----*/}
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
