import React from "react";
import Image from "next/image";
import { sbEditable } from "@storyblok/storyblok-editable";

const Feature = ({ blok }) => {
    let height = parseInt(blok.height, 10);
    let width = parseInt(blok.width, 10);

    return (<div className='col-12 col-sm-4'>
        <Image
            src={'https:'+blok.name}
            alt="Photo récupérée sur pexels"
            height={height}
            width={width}
        />
    </div>);
}

export default Feature;