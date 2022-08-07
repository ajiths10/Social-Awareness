import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Context from "../../../context/authContext/Context";
import MessageIcon from "@mui/icons-material/Message";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import CommonContext from "../../../context/commonContext/CommonContext";

const theme = createTheme();

const ContactUs = () => {
  const history = useNavigate();
  const { setAuthentication, isAuthenticated } = useContext(Context);
  const { setAlert } = useContext(CommonContext);

  const validationSchema = yup.object({
    name: yup.string("Enter your first name").required("required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    phonenumber: yup.number("Number only"),
    message: yup.string("Enter message").required("required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phonenumber: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      setAlert({message: "Form Submited Successfully", type: 1})
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MessageIcon />

          <Typography component="h1" variant="h5">
            Contact Us
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 4 }}
          >
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phonenumber"
                  label="Phone Number"
                  type="phone"
                  id="phonenumber"
                  autoComplete="phonenumber"
                  value={formik.values.phonenumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phonenumber &&
                    Boolean(formik.errors.phonenumber)
                  }
                  helperText={
                    formik.touched.phonenumber && formik.errors.phonenumber
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                  aria-label="meassage"
                  minRows={6}
                  required
                  fullWidth
                  placeholder="Text Message"
                  style={{ width: 500 }}
                  name="message"
                  label=" Message"
                  type="text"
                  id="message"
                  autoComplete="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              style={{ height: 50 }}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ContactUs;
