import React from "react";
import styled from "styled-components";

const Text = (props) => {

    const { cursor, font_style, _onClick,margin, bold, color, size, children} = props;
    const styles = {
        bold : bold, 
        color:color,
        size: size,
        margin : margin,
        font_style,
        cursor,

        };

    return (
        <P onClick={_onClick} {...styles}>
            {children}
        </P>
    );
}

Text.defaultProps ={
    bold : false,
    color : '#222831',
    size : '14px',
    margin : null,
    _onClick : null,
    font_style : null,
    cursor : null,

};

const P = styled.div`
    color : ${(props) => props.color};
    font-size : ${(props) => props.size};
    font-weight : ${(props) => (props.bold?"600" : "400")};
    margin : ${(props) => props.margin};
    font-style: ${(props) => props.font_style};
    cursor : ${(props) => props.cursor};
`;

export default Text;