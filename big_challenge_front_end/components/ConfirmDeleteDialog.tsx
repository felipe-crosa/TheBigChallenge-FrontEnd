import {FC} from "react";
import {Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Button} from "@mui/material";


type Props={
    open:boolean
    setOpen:Function
}
export const ConfirmDeleteDialog:FC<Props> = ({setOpen,open}:Props) =>{

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Are you sure you want to delete this submission?
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                   By deleting this submission, this information will be lost and will not be recoverable.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button className="text-red-500" onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose} autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}