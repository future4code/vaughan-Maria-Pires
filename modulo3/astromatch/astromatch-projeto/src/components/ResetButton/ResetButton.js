import { Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";


const ResetButton = () => {
    return(
        <div>
            <Button><Delete fontSize="large"/></Button>
        </div>
    )
}

export default ResetButton;