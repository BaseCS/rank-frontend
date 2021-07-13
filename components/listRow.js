import { IoDocumentText, IoPeople } from "react-icons/io5";

export default function ListRow(props) {

    const wrapperClasses = `
        text-gray-500
        w-full
        flex
        flex-row
        py-3
        hover:bg-gray-50
        hover:rounded
    `;

    const rankClasses = `
        text-green-500 
        w-12 
        flex
        items-center
        justify-center
        text-sm
        font-semibold
        flex-shrink-0
    `;

    const nameWrapperClasses = `
        flex-grow
        overflow-hidden
    `;

    const nameClasses = `
        font-semibold
        truncate
    `;

    const infoClasses = `
        w-2/5
        flex-shrink-0
        flex
        flex-row
    `;

    const fieldClasses = `
        w-1/3
        h-full
        flex
        items-center
        justify-center
    `;

    const fieldGroupClasses = `
        text-sm
        flex
        flex-col
        items-center
        hover:text-green-500
        hover:font-semibold
    `;

    const iconClasses = `
        h-4
        w-4
        mt-1
        mb-1
    `;

    return(
        <>
            <div className={wrapperClasses} title="This is a very long university name from somewhere over the rainbow">
                <p className={rankClasses}>
                    69
                </p>
                <div className={nameWrapperClasses}>
                    <p className={nameClasses}>
                        This is a very long university name from somewhere over the rainbow
                    </p>
                    <p className="text-sm text-gray-400">
                        Location &amp; Type
                    </p>
                </div>
                <div className={infoClasses}>
                    <div className={fieldClasses}>
                        <button className={fieldGroupClasses} title="show publications from this institution">
                            <IoDocumentText className={iconClasses}/>
                            1234
                        </button>
                    </div>
                    <div className={fieldClasses}>
                        <button className={fieldGroupClasses} title="show researchers from this institutions">
                            <IoPeople className={iconClasses}/>
                            4567
                        </button>
                    </div>
                    <div className={fieldClasses}>
                        7890
                    </div>
                </div>
            </div>
        </>
    );
}