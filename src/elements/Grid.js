import React from "react";
import styled from "styled-components";

const Grid = (props) => {

    
    //Border category
    const { B_left, B_right} = props;

    //Background category
    const { BG_c} = props;
    
    //flex category
    const { is_flex, flex_direction, justify_content, align_items } = props;
    
    //size, position category
    const { width, height, margin, padding, center, } = props;
    
    
    //event category
    const {_onClick} = props;
    
    //children category
    const  { children, } = props;
    
    
    const styles = {
        B_left,
        B_right,

        BG_c,

        is_flex,
        flex_direction,
        justify_content,
        align_items,
        
        width,
        height,
        margin,
        padding,

    };

    return(
        <React.Fragment>
            <GridBox onClick={_onClick} {...styles}>
                {children}
            </GridBox>
        </React.Fragment>
    )
}

//default Props value
Grid.defaultProps ={
    children : null,

    is_flex :false,
    flex_direction : "row",
    align_items : "center",
    justify_content : null,
    
    BG_c : false,
    
    width : "100%",
    height : "100%",
    padding : false,
    margin : false,

    _onClick : null,
}

const GridBox = styled.div`


    //flex
    ${(props) => (props.is_flex? `display : flex;`:"")}
    align-items : ${props => props.align_items};
    justify-content : ${props => props.justify_content};
    flex-direction :  ${props => props.flex_direction};

    //size, position
    width : ${props => props.width};
    height : ${props => props.height};
    padding :${props => props.padding};
    margin : ${props => props.margin};

    //border
    border-left : ${props => props.B_left};
    border-right :  ${props => props.B_right};
    
    //background
    background-color : ${props => props.bg};}
    
    /* box-sizing : border-box; */

`;

export default Grid;