import { IoPeople } from "react-icons/io5";
import { FaGraduationCap, FaFileAlt } from "react-icons/fa";
import { useState } from "react";

export default function ListRow(props) {

    const name = "The University of North Carolina at Chapel Hill"
    const type = "University"

    const [show, setShow] = useState(false);

    function toggleShow() {
        setShow(!show);
    }

    const wrapperClasses = `
        listRow
        w-full
        md:rounded
        filter
    ` + (show ? " bg-gray-100 md:my-4 active" : "")
    ;
    const mainClasses = `
        w-full
        flex
        flex-row
        py-3
        px-4
        md:px-3
        group
    ` + (show ? " bg-gray-200 md:bg-transparent" : "")
    ;
    const nameWrapperClasses = `
        flex-grow
        overflow-hidden
    `;
    const nameClasses = `
        text-left
        font-semibold
        truncate
        group-hover:text-green-500
    `;
    const defaultFieldClasses = `
        field
        h-full
        flex
        flex-col
        items-center
        justify-center
        flex-shrink-0
        px-1
        lg:w-24
        w-16
    `;
    const countClasses = defaultFieldClasses + `
        hidden
        md:flex
    `;
    const fieldGroupClasses = `
        w-full
        text-sm
        flex
        flex-col
        items-center
        filter
    `;
    const iconClasses = `
        h-4
        w-4
        mt-1
        mb-1
        group-hover:text-green-500
    `;
    const contentClasses = `content px-4 md:px-3
    ` + (show ? " py-3" : " py-0");

    let content = <></>;

    if (show) {
        content = 
        <>  
            <p className="text-sm">
                <span className="text-gray-400">10 year history for </span>
                <span className="font-semibold">{name}</span>
            </p>
            <p className="font-serif">{name}</p>
            <p className="font-semibold italic">{name}</p>
            <p className="font-semibold italic">{name}</p>
        </>;
    }

    return(
        <>
            <div className={wrapperClasses}>
                <button onClick={toggleShow} className={mainClasses} title={name}>
                    <div className={nameWrapperClasses}>
                        <p className={nameClasses}>
                            {name}
                        </p>
                        <div className="text-sm text-gray-400 flex items-center">
                            <div className="flag-icon-background flag-icon-us mr-1 rounded-sm flex-shrink-0" style={{height: "0.9rem", width: "1.2rem", backgroundSize: "cover"}}/>
                            <p className="pr-2 border-gray-300 border-r mr-2 flex-shrink-0">US</p>
                            <FaGraduationCap className="h-5 w-5 mr-1 flex-shrink-0"/>
                            <p className="truncate text-left">{type}</p>
                        </div>
                    </div>
                    {!show && <>
                        <div className={countClasses}>
                            <div className={fieldGroupClasses} title="show publications from this institution">
                                <FaFileAlt className={iconClasses}/>
                                <span className="text-gray-400 truncate w-full">123123</span>
                            </div>
                        </div>
                        <div className={countClasses}>
                            <div className={fieldGroupClasses} title="show researchers from this institutions">
                                <IoPeople className={iconClasses}/>
                                <span className="text-gray-400 truncate w-full">123123</span>
                            </div>
                        </div>
                        <div className={defaultFieldClasses}>
                            <p className="text-green-500 font-semibold truncate w-full">123123</p>
                            <p className="text-sm text-gray-400 truncate w-full">123123</p>
                        </div>
                    </>}
                </button>
                {show && 
                    <div className="h-px bg-gray-300 mx-3 hidden md:block"/>
                }
                <div className={contentClasses}>
                    {content}
                </div>
            </div>
            <style jsx>{`
                .listRow {
                    transition: margin 300ms;
                }

                .listRow + .listRow {
                    // border-top: 1px solid #D1D5DB;
                }

                .content {
                    transition: padding 300ms;
                }

                @media (max-width: 767px) {
                    .listRow:nth-child(odd) {
                        background: #F9FAFB;
                    }

                    .listRow.active + .listRow.active {
                        // border-top: 1px solid #D1D5DB;
                        border-top: 0;
                    }

                    .listRow.active {
                        border-top: 1px solid #D1D5DB;
                        border-bottom: 1px solid #D1D5DB;
                    }

                    .listRow:last-of-type {
                        border-bottom: 0;
                    }
    
                    .listRow:first-of-type {
                        border-top: 0;
                    }
                }
            `}</style>
        </>
    );
}