import React from "react";

import {Grid, Input, Button} from "../elements";

const CommentWrite = () => {

    return (
        <React.Fragment>
            <Grid is_flex justify_content='space-between'>
            <Input is_textarea width='800px' height='100px' padding='20px' B_radius='12px'/>
            <Button 
                height='100px' B_radius='12px' width='70px'  margin='0 10px 0 0'  Border='none' BG_color='#ffec99'>작성
            </Button>
            </Grid>
        </React.Fragment>
    );
}

export default CommentWrite;
