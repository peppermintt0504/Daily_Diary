import React from "react";
import styled from "styled-components";

const Text = (props) => {

    const { F_size, F_color, F_weight, F_style, F_decoration } = props;

    const { cursor } = props

    const { margin, padding } = props

    const { Border, B_radius,} = props;

    const { _onClick, children } = props;
    const styles = {
        F_size,
        F_color,
        F_weight, 
        F_style,
        F_decoration,

        Border, 
        B_radius,

        margin,
        padding,

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
    F_decoration : null,

    cursor : null,

    Border : null, 
    B_radius : null,

    margin : null,
    padding : null,
    
    _onClick : null,
};

const P = styled.div`
    font-size : ${(props) => props.F_size};
    color : ${(props) => props.F_color};
    font-weight : ${(props) => (props.F_weight)};
    font-style: ${(props) => props.F_style};
    text-decoration : ${props => props.F_decoration};

    border :  ${props => props.Border};
    border-radius :  ${props => props.B_radius};

    padding : ${(props) => props.padding};
    margin : ${(props) => props.margin};
    cursor : ${(props) => props.cursor};
`;

export default Text;