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
        bg-gray-50
    `;
    const headerClasses = `
        text-gray-500 
        hover:text-green-500
        group
        font-semibold
        py-3
        px-4
        md:p-3
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
        group-hover:bg-green-500
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
        px-4
        md:px-3 
        pt-3 
        md:pt-0
        text-gray-500
    `;
    const borderClasses = `
        bg-gray-200 
        mb-3 
        h-px 
        w-full 
        hidden 
        md:block
    `;
    const subtitleClasses = `
        text-gray-400
        text-sm
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