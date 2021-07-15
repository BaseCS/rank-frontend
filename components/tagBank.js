import React, { useState, useEffect, useRef } from "react";
import Tag from "./tag";
import { HiChevronDown } from "react-icons/hi";

export default function TagBank(props) {
    const [show, setShow] = useState(props.show);
    const defaultName = props.title;
    const [displayName, setName] = useState(defaultName);

    function toggleShow() {
        if (props.collapsible) {
            setShow(!show);
        }
    }

    function clearAll() {
        let result = new Array(props.tags.length).fill(false);
        props.onUpdate(result);
    }

    function selectAll() {
        let result = new Array(props.tags.length).fill(true);
        props.onUpdate(result);
    }

    function setOne(selected) {
        let result = [...props.selected];
        result[selected.index] = selected.value;
        props.onUpdate(result);
    }

    function updateName(name) {
        if (name == undefined) {
            setName(defaultName);
        } else {
            setName(name);
        }
    }

    let count = 0;
    for (const tag of props.selected) {
        if (tag) {count++}
    }

    const buttonClasses = `
        bg-gray-500
        text-white
        filter
        hover:bg-green-500
        hover:text-white
        active:brightness-90
        hover:shadow-md
        rounded 
        px-2
    `;
    const showButtonClasses = `
        text-gray-500
        filter
        hover:bg-green-500
        hover:text-white
        active:brightness-90
        hover:shadow-md
        h-6 
        w-6 
        rounded-full 
        text-center
    `;
    const defaultNameClasses = `
        font-semibold
        h-6
        truncate
    ` + (props.collapsible ? "mr-48" : "mr-40")
    ;
    const highlightedNameClasses = defaultNameClasses + `
        text-green-500 
        capitalize
    `;
    const defaultNameCollapsibleClasses = defaultNameClasses + `
        hover:text-green-500
        select-none
        cursor-pointer
        filter
        active:brightness-90
    `;

    return(
        <div>  
            <div className={displayName == defaultName ? (props.collapsible ? defaultNameCollapsibleClasses : defaultNameClasses) : highlightedNameClasses} onClick={toggleShow}>
                {displayName}
            </div>
            <div className="h-6 -mt-6 flex flex-row justify-end">
                <div className="flex flex-row items-center space-x-2 pl-2">
                    <div className="text-sm text-gray-400">
                        <span className={"font-semibold " + (count > 0 ? "text-green-500" : "text-red-400")}>{count}</span> / {props.tags.length}
                    </div>
                    <button onClick={selectAll} className={buttonClasses} title="select all">All</button>
                    <button onClick={clearAll} className={buttonClasses} title="select none">None</button>
                    {props.collapsible &&
                        <button onClick={toggleShow} className={showButtonClasses} title={show ? "show less" : "show more"}>
                            <HiChevronDown className={show ? "transform rotate-180 h-6 w-6" : "h-6 w-6"}/>
                        </button>
                    }
                </div>
            </div>
            {(show || !props.collapsible) && 
                <div className="mt-3">
                    {props.tags.map((tag, index) => {return (
                        <Tag 
                            key={index} 
                            type={props.type}
                            index={index} 
                            textDisplay="uppercase" 
                            content={tag} 
                            active={props.selected[index]} 
                            onUpdate={setOne}
                            onHover={updateName}
                        />);
                    })}
                </div>
            }
        </div>
    );
}