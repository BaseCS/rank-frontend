import ListRow from "./listRow";

export default function ListPanel(props) {

    const headerClasses = `
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
        bg-opacity-80
        md:fixed
        w-full
        md:pr-4
        z-50
    `;

    const titleClasses = `
        flex-grow
    `;

    const fieldClasses = `
        field
        w-auto
        text-center
        truncate
    `;

    return(
        <>
            <div id="listHeader" className={headerClasses}>
                <p className="w-12 text-center flex-shrink-0 text-green-500">#</p>
                <p className={titleClasses}>Institution</p>
                <p className={fieldClasses} title="research publication count">Pubs.</p>
                <p className={fieldClasses} title="researcher count">Ppl.</p>
                <p className={fieldClasses}>Score</p>
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
                .field {
                    width: calc(40% / 3);
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