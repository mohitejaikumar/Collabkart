import { CircularProgress } from "@mui/material";

export default function Loading(){
    return (
        <div className="loader">
         <center>
            <CircularProgress color="primary" variant="indeterminate" />
        </center>
        </div>
       
        
    )
}