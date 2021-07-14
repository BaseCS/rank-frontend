import React, { useState, useEffect, useRef } from "react";
import { HiTag } from "react-icons/hi";
import ReactCountryFlag from "react-country-flag";

export default function Tag(props) {
    let icon = undefined;
    if (props.type == "tag") {
        if (props.content.icon == undefined) {
            icon = <HiTag/>;
        } else {
            icon = props.content.icon;
        }
    } else if (props.type == "country") {
        let flagID = "flag-icon-background flag-icon-" + props.content.id.toLowerCase();
        icon = <div className={flagID + " rounded-sm"} style={{height: "1rem", width: "1.33rem", backgroundSize: "cover"}}></div>;
    }
    

    function toggleActive() {
        let result = {index: props.index, value: !props.active};
        props.onUpdate(result);
    }

    function onHoverStart() {
        props.onHover(props.content.name);
    }

    function onHoverEnd() {
        props.onHover();
    }

    const wrapperClasses = `
        inline-block 
        cursor-pointer  
        h-6 
        px-0.5 
        pr-2 
        rounded 
        mr-1
        filter
        active:brightness-90
        hover:text-green-500
        hover:shadow-md
        group
    `;
    const layoutClasses = `
        flex 
        flex-row 
        items-center 
        h-full
    `;
    const iconClasses = `
        flex-shrink-0 
        h-5 
        min-w-5
        p-0.5 
        box-border 
        bg-white 
        rounded-sm 
        mr-2
        overflow-hidden
    `;
    const labelClasses = `
        flex-shrink-0
        text-sm
    `;

    return(
        <button title={props.content.name} className={wrapperClasses + (props.active ? "bg-green-500" : "bg-gray-100")} onClick={toggleActive} onMouseEnter={onHoverStart} onMouseLeave={onHoverEnd}>
            <div className={layoutClasses}>
                <div className={iconClasses + (props.active ? "text-green-500" : "")}>
                    {icon}
                </div>
                <div className={props.textDisplay + labelClasses + (props.active ? "text-white" : "")}>
                    {props.content.id}
                </div>
            </div>
        </button>
    );
}