export default function SideScroll(props) {

    const heightString = String(props.height);
    const heightNum = Number(heightString.split(/[(rem)(px)]/)[0]);

    let padding;
    let unit;
    if (heightString.slice(-3) == "rem") {
        padding = 0.75 * 2;
        unit = "rem";
    } else if (heightString.slice(-2) == "px") {
        padding = 12 * 2;
        unit = "px";
    }

    const scrollContainerClasses = `
        overflow-x-scroll
        overflow-y-hidden
        -mx-4
        md:-mx-3
        pb-3
        -mb-3
        flex
    `;
    const carouselClasses = `
        flex
        flex-row
        space-x-3
        px-4
        md:px-3
        flex-shrink-0
    `;

    return(
        <>
            <div className={scrollContainerClasses} >
                <div className={carouselClasses} style={{height: heightString}}>
                    {props.children}
                    {/* invisible stopper to fix overflow padding issues */}
                    {/* <div className="h-1 w-1 md:-ml-1 flex-shrink-0 bg-red-200 opacity-100"></div> */}
                </div>
                {/* <div className="h-4 w-4 flex-shrink-0 bg-red-200 opacity-100"></div> */}
            </div>
            <div className="relative z-20 -mb-3 -mx-4 md:-mx-3 pointer-events-none hidden md:flex flex-row" style={{height: ((heightNum + padding) + unit), marginTop: "-" + ((heightNum + padding) + unit)}}>
                <div className="bg-gradient-to-r from-gray-100 w-4 md:w-3 h-full"></div>
                <div className="flex-grow"></div>
                <div className="bg-gradient-to-l from-gray-100 w-4 md:w-3 h-full"></div>
            </div>
        </>
    );
}