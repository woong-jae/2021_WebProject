import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import { getMountainInfo } from "../../../api/index";
import Loading from "../../common/Loading";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function MountainDetail(props) {
  const [open, setOpen] = React.useState(false);
  const { mountain } = props;
  const [detailState, setDetailState] = React.useState(null);

  const handleClickOpen = async () => {
    setOpen(true);
    const data = await getMountainInfo(mountain);
    setDetailState(data.data.item);
  };

  React.useEffect(() => {}, [detailState]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mountain-detail">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        산 정보
      </Button>
      {open && detailState ? (
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            style={{ textAlign: "center" }}
          >
            {mountain}
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              높이: 약 {detailState?.mntheight}m
            </Typography>
            <br />
            <Typography
              gutterBottom
              dangerouslySetInnerHTML={{
                __html: detailState && detailState.aeatreason,
              }}
            ></Typography>
            <br />
            <Typography
              gutterBottom
              dangerouslySetInnerHTML={{
                __html: detailState && detailState.tourisminf,
              }}
            ></Typography>
          </DialogContent>
        </Dialog>
      ) : (
        <Loading load={open} />
      )}
    </div>
  );
}
