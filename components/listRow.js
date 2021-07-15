import { IoPeople } from "react-icons/io5";
import { FaGraduationCap, FaFileAlt } from "react-icons/fa";

export default function ListRow(props) {

    const wrapperClasses = `
        text-gray-500
        w-full
    `;
    const mainClasses = `
        w-full
        flex
        flex-row
        py-3
        md:hover:rounded
        hover:bg-gray-50
        pr-2
        md:pr-0
        group
    `;
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
        active:brightness-90
    `;
    const iconClasses = `
        h-4
        w-4
        mt-1
        mb-1
        text-gray-500
        group-hover:text-green-500
    `;

    return(
        <>
            <div className={wrapperClasses}>
                <button className={mainClasses} title="This is a very long university name from somewhere over the rainbow">
                    <div className={rankClasses}>
                        <p className="text-green-500 font-semibold">1</p>
                        <p className="text-sm text-gray-400">123456</p>
                    </div>
                    <div className={nameWrapperClasses}>
                        <p className={nameClasses}>
                            This is a very long university name from somewhere over the rainbow
                        </p>
                        <div className="text-sm text-gray-400 flex items-center">
                            <div className="flag-icon-background flag-icon-us mr-1 rounded-sm" style={{height: "0.9rem", width: "1.2rem", backgroundSize: "cover"}}/>
                            <p className="pr-2 border-r mr-2">US</p>
                            <FaGraduationCap className="h-5 w-5 mr-1"/>
                            <p>University</p>
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
            </div>
        </>
    );
}