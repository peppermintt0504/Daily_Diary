import React from "react";
import styled from "styled-components";

const Text = (props) => {

    const { F_size, F_color, F_weight, F_style } = props;

    const { cursor } = props

    const { margin } = props

    const { _onClick, children } = props;
    const styles = {
        F_size,
        F_color,
        F_weight, 
        F_style,

        margin,

        cursor,
        };

    return (
        <P onClick={_onClick} {...styles}>
            {children}
        </P>
    );
}

Text.defaultProps ={
    F_size : '14px',
    F_color : '#222831',
    F_weight : false,
    F_style : null,

    cursor : null,

    margin : null,
    
    _onClick : null,
};

const P = styled.div`
    font-size : ${(props) => props.F_size};
    color : ${(props) => props.F_color};
    font-weight : ${(props) => (props.F_weight)};
    font-style: ${(props) => props.F_style};



    margin : ${(props) => props.margin};
    cursor : ${(props) => props.cursor};
`;

export default Text;