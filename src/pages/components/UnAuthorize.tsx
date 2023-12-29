import { Card } from "@mui/material";

export default function UnAuthorize() {

    return (
        <center style={{ paddingTop: '200px' }}>
            <Card style={{ width: '300px', height: '300px', padding: '20px', backgroundColor: 'gray', color: 'white' }}>
                <b style={{ fontSize: '50px' }}>Unauthorized</b>
                <br />
                <br />
                <b style={{ fontSize: '100px', color: 'red' }}>401</b>
            </Card>
        </center>
    )

}