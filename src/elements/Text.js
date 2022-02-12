import React from "react";
import styled from "styled-components";

const Text = (props) => {

    const { F_size, F_color, F_weight, F_style, F_decoration , F_shadow} = props;

    const { cursor } = props

    const { margin, L_height } = props

    const { _onClick, children } = props;
    const styles = {
        F_size,
        F_color,
        F_weight, 
        F_style,
        F_decoration,
        F_shadow,

        L_height,
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
    F_decoration : null,
    F_shadow: null,

    cursor : null,

    L_height: null,
    margin : null,

    
    _onClick : null,
};

const P = styled.div`
    font-size : ${(props) => props.F_size};
    color : ${(props) => props.F_color};
    font-weight : ${(props) => (props.F_weight)};
    font-style: ${(props) => props.F_style};
    text-shadow : ${(props) => props.F_shadow};
    text-decoration : ${props => props.F_decoration};


    line-height : ${(props) => props.L_height};
    margin : ${(props) => props.margin};
    cursor : ${(props) => props.cursor};
`;

export default Text;