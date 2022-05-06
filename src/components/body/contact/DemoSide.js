import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import emailjs from "emailjs-com";
import "./contact.css";

const useStyles = makeStyles({
  list: {
    width: "100%",
    padding: "20px",
    height: "100vh",
    alignItems: "center",
    display: "flex",
  },
  fullList: {
    width: "auto",
  },
  btnGet: {
    backgroundColor: "aquamarine",
    padding: "3px 9px",
    fontSize: "22px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    "@media(max-width:720px)": {
      fontSize: "16px",
    },
  },
});

export default function DemoSide() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(true);

    emailjs
      .sendForm("gyanish0", "template_2l0a6yq", e.target, "WR9U6gF60hSJwIryu")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
        alert("I will reach out to you very soon 👍");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    if (loader === false) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="root">
        <form
          className="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            //   placeholder="Enter Your Name"
            label="Name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            required
            width="100%"
            style={{ paddingBottom: "10px" }}
          />
          <TextField
            //   placeholder="Enter Your Email"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            required
            style={{ paddingBottom: "10px" }}
          />
          <TextField
            label="Message"
            //   placeholder="Enter Your Message"
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            multiline
            rows="2"
            style={{ paddingBottom: "20px" }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{
              background: loader === true ? "#ccc" : "aquamarine",
              color: "#000",
            }}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            className={classes.btnGet}
          >
            Get In Touch
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
