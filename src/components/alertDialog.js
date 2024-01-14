import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useAppState } from '../appContext';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialog(){
    const { alert, showAlert, alertAction } = useAppState();
    return(
        <>
            {alert &&
                <Dialog
                    open={showAlert}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={()=>alertAction("cancel")}
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>{alert.message.title}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {alert.message.body}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={()=>alertAction("cancel")}>{alert.message.cancelText}</Button>
                    <Button onClick={()=>alertAction(alert.action)}>{alert.message.confirmText}</Button>
                    </DialogActions>
                </Dialog>
            }
        </>
    )
}