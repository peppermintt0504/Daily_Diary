import React from "react";
import styled from "styled-components";


const Button = (props) => {

    //Border category
    const { Border, B_radius,   } = props;
    
    //Background category
    const { BG_color,   } = props;
    
    // point
    const { cursor, } = props;

    //font category
    const { font_color, font_size, font_weight  } = props;
    
    //size, position category
    const { width, height, } = props;
    
    //event category
    const { _ref , _onClick, disabled, } = props;
    
    //text category
    const { text, children} = props;
    

    const {  } = props;





    const sytles = {
        Border,
        B_radius,

        BG_color,

        cursor,

        font_weight,
        font_color,
        font_size,

        width,
        height,

    }
    
    
    return (
    <div>
        <Btn {...sytles} ref={_ref} onClick={()=>_onClick()} disabled={disabled}>{text}{children}</Btn>
    </div>
    );
}


Button.defaultProps ={

    height : "50px",
    width : "100px",
    
    cursor : 'pointer',
    font_weight : false,
    
    text : null,
    _onClick : false,
    disabled : false,
    _ref:null,
};

const Btn = styled.button`

    border :            ${props => props.Border};
    border-radius :     ${props => props.B_radius};
    
    background-color :  ${props => props.BG_color};
    
    font_weight :         ${props => props.font_weight};
    font-size :         ${props => props.font_size};
    color :             ${props => props.font_color};
    cursor :             ${props => props.cursor};
    
    height :            ${props => props.height};
    width :             ${props => props.width};
`;


export default Button;