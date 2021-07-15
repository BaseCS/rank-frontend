import ListRow from "./listRow";

export default function ListPanel(props) {

    const headerClasses = `
        panelHeader
        border-t
        border-b
        border-gray-200
        text-gray-500
        font-semibold
        items-center
        h-16
        flex
        flex-row
        backdrop-filter
        backdrop-blur
        bg-white
        bg-opacity-70
        md:fixed
        w-full
        pr-2
        md:pr-4
        z-50
    `;
    const titleClasses = `
        truncate
        flex
        flex-row
        items-center
        flex-grow
    `;
    const fieldClasses = `
        text-center
        truncate
        w-16
        lg:w-24
        flex-shrink-0
    `;
    const rankClasses = `
        text-center
        truncate
        w-20
        md:w-24
        flex-shrink-0
    `;
    return(
        <>
            <div id="listHeader" className={headerClasses}>
                <p className={rankClasses + " text-green-500"} title="rank and calculated score">#</p>
                <p className={titleClasses}>
                    Institution
                    &nbsp;
                    <span className="text-sm font-normal text-gray-400 truncate">select one to see more</span>
                </p>
                <p className={fieldClasses} title="research publications">Pubs.</p>
                <p className={fieldClasses} title="published researchers">Ppl.</p>
                {/* <p className={fieldClasses}>Score</p> */}
            </div>
            <div className="mt-20 w-full md:pr-4 md:pb-8">
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
                <ListRow></ListRow>
            </div>
            <style jsx>{`
                @-moz-document url-prefix() { 
                    .panelHeader {
                        background-color: white;
                    }
                }

                @media (min-width: 768px) {
                    #listHeader {
                        width: calc(100% - (380px - 0.75rem));
                    }
                }

                @media (min-width: 1024px) {
                    #listHeader {
                        width: calc(100% - (480px - 0.75rem));
                    }
                }
            `}</style>
        </>
    );
}