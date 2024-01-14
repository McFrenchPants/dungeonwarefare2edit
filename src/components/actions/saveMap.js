import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const SaveMap = () => {

    return (
        <div>
            <Button variant="contained" startIcon={<SaveIcon/>}>Save</Button>
        </div>
    )
}
export default SaveMap;