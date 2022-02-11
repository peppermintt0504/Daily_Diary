import React from "react";
import styled from "styled-components";

const Input = (props) => {

    //Border category
    const { Border, B_radius, } = props;
    
    //size, position category
    const { rows, width, height, margin } = props;
    
    //setting, event category
    const { label, _onChange, _defaultValue, _ref , type, value, placeholder } = props;

    //children
    const { children } = props;


    const styles ={
        Border,
        B_radius,

        rows,
        width,
        height,
        margin
    }

    return (
        <div>

            <P>{label}</P>
            <Wrap>
                <In
                rows={rows}
                onChange = {_onChange}
                defaultValue={_defaultValue}
                ref={_ref}
                type = {type}
                value={value}
                placeholder = {placeholder}
                {...styles}></In>
            </Wrap>
        </div>
    );
}

Input.defaultProps ={
    label : null,
    onChange : false,
    placeholder : null,
    type : "text",

    Border : "1px gray solid",
    B_radius : null,

    rows : "1",
    width : "100%",
    height : "40px",
    margin : "auto",

};

const Wrap = styled.div`
    justify-content : center; 
    display : flex;
    flex-wrap : wrap;
    align-items : center;
    
`;

const In = styled.input`
    border : ${props=> props.Border};
    border-radius : ${props => props.B_radius};

    justify-content : center; 
    
    height : ${props => props.height};
    width : ${props => props.width};
    margin :  ${props => props.margin};;
`;
const P = styled.div`
    font-size : 12px;
    margin : 1px
`;

export default Input;