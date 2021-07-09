import React, { useState, useEffect, useRef } from "react";
import { HiTag } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";
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
        icon = <ReactCountryFlag countryCode={props.content.id} svg style={{width: '1.4rem', height: '1rem', display: "block", transform: "scale(1)"}}/>;
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
        bg-gray-200 
        h-6 
        px-0.5 
        pr-2 
        rounded 
        mr-1
        filter
        active:brightness-90
        group
        hover:ring-2
        hover:ring-green-500
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
        <button title={props.content.name} className={wrapperClasses + (props.active ? "bg-green-500 shadow-md" : "")} onClick={toggleActive} onMouseEnter={onHoverStart} onMouseLeave={onHoverEnd}>
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