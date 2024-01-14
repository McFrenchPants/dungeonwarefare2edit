import { Button } from '@mui/material';
import FeedIcon from '@mui/icons-material/Feed';
import { useAppState } from '../../appContext';

const NewMap = () => {
    const { setAlert, setShowAlert } = useAppState();

    const handleClick = () =>{
        console.log("User clicked New map button...");
        
        const newMapAlert = {
            isOpen: true,
            message: {
                title: "Create New Map",
                body: "Would you like to create a new map to edit? Any current work will be lost.",
                confirmText: "Sure",
                cancelText: "Nevermind"
            },
            action: "resetMap"
        };
        setAlert(newMapAlert);
        setShowAlert(true);
    };

    return (
        <div>
            <Button 
                variant="contained" 
                startIcon={<FeedIcon/>}
                onClick={()=>handleClick()}
            >New</Button>
        </div>
    )
}
export default NewMap;