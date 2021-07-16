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
        bg-gray-100
    `;
    const headerClasses = `
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
        bg-gray-200 
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
    const newContentClasses = `
        content
        px-4
        md:px-3
    ` + (show ? " py-3" : " py-0");
    const borderClasses = `
        bg-gray-300 
        h-px 
        hidden 
        md:block
        mx-3
    `;
    const subtitleClasses = `
        text-gray-400
        text-sm
        mb-3
    `;

    let content = <></>;
    if (show) {
        content = 
        <>
            <p className={subtitleClasses}>
                {props.subtitle}
            </p>
            {props.children}
        </>
    }

    return(
        <>
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
                    <div className={borderClasses}/>
                }
                <div className={newContentClasses}>
                    {content}
                </div>
            </div>
            <style jsx>{`
                .content {
                    transition: padding-top 300ms, padding-bottom 300ms;
                }
            `}</style>
        </>
    );
}