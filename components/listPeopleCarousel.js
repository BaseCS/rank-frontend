export default function ListPeopleCarousel(props) {

    const people = props.data;
    
    const wrapperClasses = `
        overflow-x-scroll
        overflow-y-hidden
        -mx-4
        md:-mx-3
        pb-3
        -mb-3
        px-4
        md:px-3
    `;
    const carouselClasses = `
        flex
        flex-row
    `;
    const cardClasses = `
        flex 
        flex-row 
        mr-3 
        flex-shrink-0 
        bg-gray-200 
        rounded 
        p-2 
        pr-3
        text-left
        group
        hover:bg-green-500
        hover:text-white
        hover:shadow-md
    `;
    const cardInititalsClasses = `
        h-9 
        w-9 
        bg-green-500 
        rounded-full 
        flex-shrink-0 
        mr-2 
        text-xs 
        flex 
        items-center 
        justify-center 
        font-semibold 
        text-white
        group-hover:bg-white
        group-hover:text-green-500
    `;
    
    let peopleGroup = [];
    for (let i = 0; i < people.length; i++) {
        let nameSplit = people[i].name.split(/[\W]/);
        let initials = "";
        for (const word of nameSplit) {
            if (word !== "") {initials += word[0]}
        };
        let card = <>
            <button key={i} className={cardClasses} style={{height: "3.25rem"}}>
                <div className={cardInititalsClasses}>
                    {initials.substring(0,3).toUpperCase()}
                </div>
                <div>
                    <p className="text-sm font-semibold">
                        {people[i].name}
                    </p>
                    <p className="text-xs text-gray-400 truncate group-hover:text-white">https://www.unc.edu</p>
                </div>
            </button>
        </>
        
        peopleGroup.push(card);
    }

    return(
        <>
            <div className={wrapperClasses}>
                <div className={carouselClasses}>
                    {peopleGroup}
                    {/* invisible stopper to fix overflow padding issues */}
                    <div className="h-1 w-1 md:-ml-1 flex-shrink-0 opacity-0"></div>
                </div>
            </div>
            <div className="relative z-20 -mb-3 -mx-4 md:-mx-3 pointer-events-none hidden md:flex flex-row" style={{height: "4.75rem", marginTop: "-4.75rem"}}>
                <div className="bg-gradient-to-r from-gray-100 w-4 md:w-3 h-full"></div>
                <div className="flex-grow"></div>
                <div className="bg-gradient-to-l from-gray-100 w-4 md:w-3 h-full"></div>
            </div>
        </>
    );
}