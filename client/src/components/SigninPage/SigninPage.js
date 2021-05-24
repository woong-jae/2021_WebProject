import React, { useState } from "react";
import {
  Dialog,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";
import "./Sections/SigninPage.scss";

export default function SigninDialog() {
  const [open, setOpen] = React.useState(false);
  const [isSignin, setIsSignIn] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [userEMAIL, setEMAIL] = useState("");
  const [userPWD, setPWD] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    passwd: "",
    passwdConfirm: "",
    birth: "",
    sex: "",
    nickname: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleClick = () => {};

  return (
    <div>
      <Button
        variant="contained"
        className="header-btn"
        id="signIn-btn"
        onClick={handleOpen}
      >
        sign in
      </Button>
      <Dialog open={open} onClose={handleClose} className="signinDialog">
        <DialogTitle className="dialogTitle">
          <LockIcon />
          <Typography variant="h3" gutterBottom>
            {isSignin ? "Sign In" : "Sign Up"}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            id="userEmail"
            label="이메일"
            margin="normal"
            type="email"
            value={userEMAIL}
            onChange={({ target: { value } }) => setEMAIL(value)}
            fullWidth
          ></TextField>
          <TextField
            required
            id="userPwd"
            label="비밀번호"
            margin="normal"
            type="password"
            value={userPWD}
            onChange={({ target: { value } }) => setPWD(value)}
            fullWidth
          ></TextField>
          {!isSignin && (
            <>
              <TextField
                required
                name="passwdConfirm"
                label="비밀번호 확인"
                type="password"
                value={inputs.passwdConfirm}
                onChange={onChange}
              ></TextField>
              <TextField
                required
                name="birth"
                label="연령"
                type="number"
                inputProps={{ min: 0 }}
                value={inputs.birth}
                onChange={onChange}
              ></TextField>
              <RadioGroup
                aria-label="sex"
                name="sex"
                value={inputs.sex}
                onChange={onChange}
                row
              >
                <FormControlLabel
                  value="male"
                  control={<Radio color="default" />}
                  label="남성"
                  labelPlacement="start"
                ></FormControlLabel>
                <FormControlLabel
                  value="female"
                  control={<Radio color="default" />}
                  label="여성"
                  labelPlacement="start"
                ></FormControlLabel>
              </RadioGroup>
              <TextField
                required
                name="nickname"
                label="닉네임"
                value={inputs.nickname}
                onChange={onChange}
              ></TextField>
            </>
          )}

          <br></br>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="signin-btn"
            onClick={handleClick}
          >
            Sign In
          </Button>
        </DialogActions>
        <Link to="/signup" variant="body2">
          Sign Up
        </Link>
      </Dialog>
    </div>
  );
}
