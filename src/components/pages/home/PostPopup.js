import * as React from "react";
import { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Context from "../../../context/Context";
import { useFormik } from "formik";
import * as yup from "yup";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const PostPopup = () => {
  const { setAuthentication, isAuthenticated, setIsPopup, isPopup } =
    useContext(Context);
  const [open, setOpen] = useState(false);

  const validationSchema = yup.object({
    title: yup.string().required("required"),
    category: yup.string().required("required"),
    imageurl: yup.string().required("required"),
    message: yup.string("Enter message").required("required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      imageurl: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      handleClose();
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsPopup(false);
    formik.handleReset();
  };
  useEffect(() => {
    console.log(isPopup);
    setOpen(isPopup);
  }, [isPopup]);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        POST EVENT
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Post</DialogTitle>
        <DialogContent>
          <DialogContentText>Social Awareness</DialogContentText>
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
                  name="title"
                  required
                  fullWidth
                  id="tile"
                  label="Tile"
                  autoFocus
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="category"
                  required
                  fullWidth
                  id="category"
                  label="category"
                  autoFocus
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.category && Boolean(formik.errors.category)
                  }
                  helperText={formik.touched.category && formik.errors.category}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="Image Url"
                  required
                  fullWidth
                  id="imageurl"
                  label="Image Url"
                  autoFocus
                  value={formik.values.imageurl}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.imageurl && Boolean(formik.errors.imageurl)
                  }
                  helperText={formik.touched.imageurl && formik.errors.imageurl}
                />
              </Grid>
              <Grid item sm={12}>
                <TextareaAutosize
                  aria-label="meassage"
                  minRows={6}
                  required
                  fullWidth
                  placeholder="Text Message"
                  style={{ width: 550 }}
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
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">submit</Button>
              </DialogActions>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostPopup;
