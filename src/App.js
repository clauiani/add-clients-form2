import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { StylesProvider, withStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  typography: {
    allVariants: {
      color: green,
    },
    h5: {
      fontSize: 24,
      color: green,
    },
  },
});
function App() {
  return (
    <Container
      maxWidth="xs"
      //  style={{ border: "0.4px solid green" }}
      container
      display="flex"
      justify="center"
      alignItems="center"
      direction="column"
      margin="auto"
      width="50%"
      padding="10px"
      style={{
        border: "0.4px solid black",
        margin: "auto",
        backgroundColor: "#A3C4BC",
        boxSizing: "border-box",
        borderRadius: "10px",
      }}>
      <Grid item>
        <Typography
          variant="h4"
          color="primary"
          style={{ marginTop: "1em", marginBottom: "2em" }}>
          Adauga Client
        </Typography>
      </Grid>
      <Grid item>
        <AddClients />
      </Grid>
    </Container>
  );
}

const AddClients = () => {
  const [data, setData] = React.useState({
    nameValid: true,
    prenumeValid: true,
    orasValid: true,
    emailValid: true,
    nrtelValid: true,
    check_textInputChange: false,
    name: "",
    prenume: "",
    email: "",
    oras: "",
    nrtel: "",
  });

  //validare nume
  const handleValidUser = (e) => {
    const val = e.target.value;

    if (val.length > 2) {
      setData((prevData) => ({
        ...prevData,
        nameValid: true,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        nameValid: false,
      }));
    }
  };
  const textInputChange = (e) => {
    const val = e.target.value;

    if (val.length > 2) {
      setData((prevData) => ({
        ...prevData,
        name: val,
        nameValid: true,
        check_textInputChange: true,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        name: val,
        nameValid: false,
        check_textInputChange: false,
      }));
    }
  };

  //validare prenume
  const handleValidPrenume = (e) => {
    const val = e.target.value;

    if (val.length > 2) {
      setData((prevData) => ({
        ...prevData,
        prenumeValid: true,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        prenumeValid: false,
      }));
    }
  };
  const textInputChangePrenume = (e) => {
    const val = e.target.value;

    if (val.length > 2) {
      setData((prevData) => ({
        ...prevData,
        prenume: val,
        prenumeValid: true,
        check_textInputChange: true,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        prenume: val,
        prenumeValid: false,
        check_textInputChange: false,
      }));
    }
  };

  //validare oras
  const handleValidOras = (e) => {
    const val = e.target.value;

    if (val.length > 1) {
      setData((prevData) => ({
        ...prevData,
        orasValid: true,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        orasValid: false,
      }));
    }
  };
  const textInputChangeOras = (e) => {
    const val = e.target.value;

    if (val.length > 1) {
      setData((prevData) => ({
        ...prevData,
        oras: val,
        orasValid: true,
        check_textInputChange: true,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        oras: val,
        orasValid: false,
        check_textInputChange: false,
      }));
    }
  };

  //validare numar de telefon
  const handleValidTel = (e) => {
    const val = e.target.value;

    if (val.length > 8) {
      setData((prevData) => ({
        ...prevData,
        nrtelValid: true,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        nrtelValid: false,
      }));
    }
  };
  const textInputChangeTel = (e) => {
    const val = e.target.value;

    if (val.length > 8) {
      setData((prevData) => ({
        ...prevData,
        nrtel: val,
        nrtelValid: true,
        check_textInputChange: true,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        nrtel: val,
        nrtelValid: false,
        check_textInputChange: false,
      }));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column" alignItems="center" justify="center">
        <Typography variant="h5">Nume</Typography>
        <TextField
          type="text"
          variant="outlined"
          label="Nume"
          required
          fullWidth
          autofocus
          validate
          style={{ marginBottom: "1em" }}
          onChange={textInputChange}
          onBlur={handleValidUser}
        />
        {data.nameValid ? null : (
          <Typography color="error">
            Numele trebuie sa fie de cel putin 3 litere
          </Typography>
        )}

        <Typography variant="h5">Prenume</Typography>
        <TextField
          type="text"
          variant="outlined"
          label="Prenume"
          fullWidth
          autoComplete
          autofocus
          required
          style={{ marginBottom: "1em" }}
          onChange={textInputChangePrenume}
          onBlur={handleValidPrenume}
        />
        {data.prenumeValid ? null : (
          <Typography color="error">
            Prenumele trebuie sa fie de cel putin 3 litere
          </Typography>
        )}

        <Typography variant="h5">Email</Typography>
        <TextField
          type="email"
          variant="outlined"
          label="Email"
          fullWidth
          autofocus
          autoComplete
          required
          style={{ marginBottom: "1em" }}
        />
        <Typography variant="h5">Oras</Typography>
        <TextField
          type="text"
          variant="outlined"
          label="Oras"
          fullWidth
          autoComplete
          autofocus
          required
          style={{ marginBottom: "1em" }}
          onChange={textInputChangeOras}
          onBlur={handleValidOras}
        />
        {data.orasValid ? null : (
          <Typography color="error">
            Orasul trebuie sa contina cel putin 2 litere
          </Typography>
        )}

        <Typography variant="h5">NumarTelefon</Typography>
        <TextField
          type="number"
          erorr
          variant="outlined"
          label="Numar de telefon"
          fullWidth
          autofocus
          autoComplete
          required
          style={{ marginBottom: "1em" }}
          onChange={textInputChangeTel}
          onBlur={handleValidTel}
        />
        {data.nrtelValid ? null : (
          <Typography color="error">
            Numarul de telefon trebuie sa contina cel putin 9 cifre
          </Typography>
        )}
        <Button size="large" variant="contained" color="primary" type="submit">
          Adauga Client
        </Button>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
