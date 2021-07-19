import { FaGraduationCap, FaFileAlt, FaUserFriends } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";

export default function ListPaperCarousel(props) {
    
    const papers = props.data;
    
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
    const paperClasses = `
        mr-3
        rounded-sm
        bg-white
        shadow-md
        flex-shrink-0
        h-32
        w-24
        overflow-hidden
        p-2
        hover:text-green-500
    `;
    const paperTitleClasses = `
        text-center
        font-serif
        h-full
        w-full
        z-10
        relative
        leading-tight
    `;
    const paperMaskClasses = `
        bg-white 
        -mx-2 
        h-10
        z-10 
        relative
        rounded-b-sm
    `;
    const paperGradientClasses = `
        h-8 
        -mt-16 
        -mx-2 
        bg-gradient-to-t
        from-white
        z-10 
        relative
    `;

    let paperGroup = [];
    for (let i = 0; i < papers.length; i++) {
        let title = papers[i].title;
        // let titleFirst = title[0].toUpperCase();
        // let titleSubstr = title.substring(1, title.length);
        let paper = 
            <button key={i} className={paperClasses}>
                {/* {papers[i].title} */}
                <p className={paperTitleClasses} style={{fontSize: "0.6rem"}}>
                    {/* <span className="text-xs leading-tight font-semibold">{titleFirst}</span>{titleSubstr} */}
                    {title}
                </p>
                <div className={paperGradientClasses}/>
                <div className={paperMaskClasses}></div>
                <div className="text-xs z-20 relative text-gray-400" style={{marginTop: "-40px"}}>
                    <p className="flex flex-row items-center">
                        <FaUserFriends/>&nbsp;123
                    </p>
                    <p className="flex flex-row items-center">
                        <BiCalendar/>&nbsp;{papers[i].date}
                    </p>
                </div>
            </button>
        paperGroup.push(paper);
    }

    return(
        <>
            <div className={wrapperClasses}>
                <div className={carouselClasses}>
                    {paperGroup}
                    {/* invisible stopper to fix overflow padding issues */}
                    <div className="h-1 w-1 md:-ml-1 flex-shrink-0 opacity-0"></div>
                </div>
            </div>
            <div className="relative z-20 -mb-3 -mx-4 md:-mx-3 pointer-events-none hidden md:flex flex-row" style={{height: "9.5rem", marginTop: "-9.5rem"}}>
                <div className="bg-gradient-to-r from-gray-100 w-4 md:w-3 h-full"></div>
                <div className="flex-grow"></div>
                <div className="bg-gradient-to-l from-gray-100 w-4 md:w-3 h-full"></div>
            </div>
        </>
    );
}