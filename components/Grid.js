import React from "react";
import DynamicComponent from "../components/DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";

const Grid = ({ blok }) => {
    return (
        <div className="row" {...sbEditable(blok)}>
            {blok.columns.map((blok) => (
                <DynamicComponent blok={blok} key={blok._uid} category={blok.category} height={blok.height} width={blok.width}/>
            ))}
        </div>
    );
};

export default Grid;