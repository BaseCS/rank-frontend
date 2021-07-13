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
        w-10 
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
        bg-gray-50
        w-1/2
        flex-shrink-0
    `;

    return(
        <>
            <div className={wrapperClasses}>
                <p className={rankClasses}>1</p>
                <div className={nameWrapperClasses}>
                    <p className={nameClasses}>This is a very long university name from somewhere</p>
                    <p className="text-sm text-gray-400">Location &amp; Type</p>
                </div>
                <div className={infoClasses}>

                </div>
            </div>
        </>
    );
}