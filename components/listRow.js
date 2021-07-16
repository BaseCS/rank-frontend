import { IoPeople } from "react-icons/io5";
import { FaGraduationCap, FaFileAlt } from "react-icons/fa";
import { useState } from "react";

export default function ListRow(props) {

    const [show, setShow] = useState(false);

    function toggleShow() {
        setShow(!show);
    }

    const wrapperClasses = `
        listRow
        text-gray-500
        w-full
        md:rounded
        hover:bg-gray-50
        filter
    ` + (show ? " bg-gray-50 md:my-4 active" : "")
    ;
    const mainClasses = `
        w-full
        flex
        flex-row
        py-3
        pr-2
        md:pr-0
        group
    ` + (show ? " bg-gray-100 md:bg-transparent" : "")
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
    `;
    const countClasses = defaultFieldClasses + `
        lg:w-24
        w-16
    `;
    const rankClasses = defaultFieldClasses + `
        w-20
        md:w-24
    `;
    const fieldGroupClasses = `
        text-sm
        flex
        flex-col
        items-center
        text-gray-400
        filter
    `;
    const iconClasses = `
        h-4
        w-4
        mt-1
        mb-1
        text-gray-500
        group-hover:text-green-500
    `;
    const contentClasses = `content px-4 md:px-3
    ` + (show ? " py-3 md:pb-3 md:pt-0" : " py-0");

    let content = <></>;

    if (show) {
        content = 
        <>
            <div className="h-px bg-gray-200 mb-3 hidden md:block"></div>
            <p>Hello here be some cool graphs and such</p>
            <p>Hello here be some content</p>
            <p>Hello here be some content content content content</p>
            <p>Hello here be some content content</p>
            <p>Hello here be some content</p>
            <p>Hello here be some content content content</p>
        </>;
    }

    return(
        <>
            <div className={wrapperClasses}>
                <button onClick={toggleShow} className={mainClasses} title="This is a very long university name from somewhere over the rainbow">
                    <div className={rankClasses}>
                        <p className="text-green-500 font-semibold">1</p>
                        <p className="text-sm text-gray-400">123456</p>
                    </div>
                    <div className={nameWrapperClasses}>
                        <p className={nameClasses}>
                            The University of North Carolina at Chapel Hill
                        </p>
                        <div className="text-sm text-gray-400 flex items-center">
                            <div className="flag-icon-background flag-icon-us mr-1 rounded-sm flex-shrink-0" style={{height: "0.9rem", width: "1.2rem", backgroundSize: "cover"}}/>
                            <p className="pr-2 border-r mr-2 flex-shrink-0">US</p>
                            <FaGraduationCap className="h-5 w-5 mr-1 flex-shrink-0"/>
                            <p className="truncate">University</p>
                        </div>
                    </div>
                    <div className={countClasses}>
                        <div className={fieldGroupClasses} title="show publications from this institution">
                            <FaFileAlt className={iconClasses}/>
                            1234
                        </div>
                    </div>
                    <div className={countClasses}>
                        <div className={fieldGroupClasses} title="show researchers from this institutions">
                            <IoPeople className={iconClasses}/>
                            4567
                        </div>
                    </div>
                </button>
                <div className={contentClasses}>
                    {content}
                </div>
            </div>
            <style jsx>{`
                .listRow {
                    transition: margin 150ms;
                }

                .listRow:nth-child(odd) {
                    // background: #F9FAFB;
                }

                .listRow + .listRow {
                    // border-top: 1px solid #E5E7EB;
                }

                .listRow:last-of-type {
                    margin-bottom: 0;
                }

                .content {
                    transition: padding-top 150ms;
                    transition: padding-bottom 150ms;
                }

                @media (max-width: 767px) {
                    .listRow.active + .listRow.active {
                        // border-top: 1px solid #E5E7EB;
                        border-top: 0;
                    }

                    .listRow.active {
                        border-top: 1px solid #E5E7EB;
                        border-bottom: 1px solid #E5E7EB;
                    }
                }
            `}</style>
        </>
    );
}