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
        // icon = <ReactCountryFlag countryCode={props.content.id} svg style={{marginTop: "-11px", width: "21px"}}/>
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
    ` + (props.active ? "bg-green-500" : "bg-gray-200")
    ;
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
    ` + (props.active ? "text-green-500" : "")
    ;
    const labelClasses = `
        flex-shrink-0
        text-sm
    ` + (props.active ? "text-white" : "")
    ;
    return(
        <button title={props.content.name} className={wrapperClasses} onClick={toggleActive} onMouseEnter={onHoverStart} onMouseLeave={onHoverEnd}>
            <div className={layoutClasses}>
                <div className={iconClasses}>
                    {icon}
                </div>
                <div className={props.textDisplay + labelClasses}>
                    {props.content.id}
                </div>
            </div>
        </button>
    );
}