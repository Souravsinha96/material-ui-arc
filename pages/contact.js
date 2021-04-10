import React, { useState } from "react";
import Head from "next/head";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import ButtonArrow from "../src/ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  background: {
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/mobileBackground.jpg")`,
      backgroundAttachment: "inherit",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.75rem",
    height: 35,
    padding: "5px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    height: "80px",
    width: "205px",
    fontSize: "1.5rem",
    backgroundColor: theme.palette.common.orange,
    marginRight: "5em",
    marginLeft: "2rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid number");
        } else {
          setPhoneHelper("");
        }
        break;

      default:
        break;
    }
  };

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="row">
      <Head>
        <title key="title">Contact Us | Arc Development</title>
        <meta
          name="description"
          key="description"
          content="Let us guide you through the custom software design and development process. Send us a message with any of your ideas or questions to get started!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Contact Us"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://material-ui-arc-teal.vercel.app/contact"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://material-ui-arc-teal.vercel.app/contact.js"
        />
      </Head>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        lg={4}
        xl={3}
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h2"
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src="/assets/phone.svg"
                  alt="phoneIcon"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ fontSize: "1em", color: theme.palette.common.blue }}
                >
                  {matchesMD ? (
                    <a
                      href="tel:+91872416832"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      +918072416832
                    </a>
                  ) : (
                    "+918072416832"
                  )}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src="/assets/email.svg"
                  alt="emailIcon"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ fontSize: "1em", color: theme.palette.common.blue }}
                >
                  <a
                    href="mailto:souravsinha1604@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    souravsinha1604@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" style={{ width: "20em" }}>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ width: "20em" }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                id="message"
                fullWidth
                placeholder="Tell us about your project?"
                multiline
                rows={10}
                value={message}
                className={classes.message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  emailHelper.length !== 0 ||
                  phoneHelper.length !== 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                Send Messsage
                <img
                  src="/assets/send.svg"
                  alt="plane"
                  style={{ marginLeft: "1em" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        fullScreen={matchesSM}
        onClose={() => setOpen(false)}
        style={{ zIndex: 1302 }}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "2em",
            paddingBottom: matchesXS ? "1em" : "2em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "15em"
              : "25em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "15em"
              : "25em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>

            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                id="name"
                fullWidth
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id="email"
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                id="phone"
                fullWidth
                value={phone}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
            <TextField
              InputProps={{ disableUnderline: true }}
              id="message"
              fullWidth
              multiline
              rows={10}
              value={message}
              className={classes.message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            alignItems="center"
            style={{ marginTop: "2em" }}
          >
            <Grid item>
              <Button color="primary" onClick={() => setOpen(false)}>
                CANCEL
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  emailHelper.length !== 0 ||
                  phoneHelper.length !== 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                Send Messsage
                <img
                  src="/assets/send.svg"
                  alt="plane"
                  style={{ marginLeft: "1em" }}
                />
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        className={classes.background}
        direction={matchesMD ? "column" : "row"}
        lg={8}
        xl={9}
        alignItems="center"
        justify={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "5em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                {" "}
                Simple Software.
                <br />
                Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMD ? "center" : undefined}
                style={{ fontSize: "1.5rem" }}
              >
                {" "}
                Take advantage of the 21st Century.
              </Typography>
              <Grid container item justify={matchesMD ? "center" : undefined}>
                <Button
                  component={Link}
                  href="/revolution"
                  onClick={() => props.setValue(2)}
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
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            href="/estimate"
            onClick={() => props.setValue(5)}
            variant="contained"
            className={classes.estimateButton}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
