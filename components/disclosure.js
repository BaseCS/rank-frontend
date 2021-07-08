import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function Disclosure(props) {
    const [show, setShow] = useState(props.show);

    function toggleShow(e) {
        e.preventDefault();
        setShow(!show);
    }

    const wrapperClasses = `
        w-full 
        max-w-full
        md:rounded 
        overflow-hidden 
        text-gray-500 
        bg-gray-50
    `;
    const headerClasses = `
        hover:text-green-400
        group
        font-semibold
        p-3 
        flex 
        flex-row 
        text-left 
        items-center 
        w-full 
        bg-gray-100 
        md:bg-transparent
    `;
    const iconWrapperClasses = `
        rounded-full
        bg-gray-200
        group-hover:bg-green-400
        group-hover:text-white
        group-hover:shadow-md
        h-6 
        w-6 
        flex-shrink-0
    `
    const iconClasses = `
        h-full 
        w-full
    `;
    const contentClasses = `
        pb-3 
        px-3 
        pt-3 
        md:pt-0
    `;
    const borderClasses = `
        bg-gray-200 mb-3 
        h-0.5 
        w-full 
        hidden 
        md:block
    `;
    const subtitleClasses = `
        text-sm 
        text-gray-400 
        mb-3
    `;

    return(
        <div className={wrapperClasses}>
            <button onClick={toggleShow} className={headerClasses} title={show ? "show less" : "show more"}>
                <p className="flex-grow">{props.title}</p>
                <div className={iconWrapperClasses}>
                    {show ?
                        <HiChevronDown className={iconClasses + "transform rotate-180"}/>
                        :
                        <HiChevronDown className={iconClasses}/>
                    }
                </div>
            </button>
            {show &&
                <div className={contentClasses}>
                    <div className={borderClasses}/>
                    {props.subtitle !== undefined && 
                        <p className={subtitleClasses}>
                            {props.subtitle}
                        </p>
                    }
                    {props.children}
                </div>
            }
        </div>
    );
}