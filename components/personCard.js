export default function PersonCard(props) {

    const person = props.data;
    const subtitle = "https://www.unc.edu";

    let nameSplit = person.name.split(/[\W]/);
    let initials = "";
    for (const word of nameSplit) {
        if (word !== "") {initials += word[0]}
    };

    const cardClasses = `
        flex 
        flex-row 
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
        active:filter
        active:brightness-90
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
    return(
        <>
            <button className={cardClasses} style={{height: "3.25rem"}}>
                <div className={cardInititalsClasses}>
                    {initials.substring(0,3).toUpperCase()}
                </div>
                <div>
                    <p className="text-sm font-semibold">
                        {person.name}
                    </p>
                    <p className="text-xs text-gray-400 truncate group-hover:text-white">
                        {subtitle}
                    </p>
                </div>
            </button>
        </>
    );
}