import styled from 'styled-components';
import React from "react";

const Image = (props) => {
    //image category
    const { src, } = props;
    
    //shape, size category
    const { shape, size, width, height } = props;
    
    //event category
    const { _onClick, } = props;
    
    const { } = props;


    const styles = {
        src,
        size,
        width,
        height,
        
    }

    if(shape === "circle"){
        return (
            <ImageCircle onClick={_onClick} {...styles}></ImageCircle>
        )
    }

    return (
        <AspectOutter>
            <AspectInner onClick={_onClick} {...styles}></AspectInner>
        </AspectOutter>
    )


}

Image.defaultProps = {
    
    shape: null,
    src: "https://thumb.mt.co.kr/06/2021/03/2021030521582049015_1.jpg/dims/optimize/",
    size: "500",
    width : "50%",
    height : "50%"
};

const ImageDefault = styled.div`
    width : ${(props)=> props.width};
    height : ${(props)=> props.height};
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

const AspectOutter = styled.div`
    width : ${(props)=> props.width};
    height : ${(props)=> props.height};
    min-width: 400px;
`;

const AspectInner = styled.div`
    width : ${(props)=> props.width};
    height : ${(props)=> props.height};
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

export default Image;