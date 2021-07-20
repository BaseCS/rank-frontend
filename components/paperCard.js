import { FaUserFriends } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";

export default function PaperCard(props) {

    const paper = props.data;

    const paperClasses = `
        rounded-sm
        bg-white
        shadow-md
        flex-shrink-0
        h-32
        w-24
        overflow-hidden
        p-2
        hover:text-green-500
        active:filter
        active:brightness-90
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

    return(
        <>
            <button className={paperClasses}>
                {/* {papers[i].title} */}
                <p className={paperTitleClasses} style={{fontSize: "0.6rem"}}>
                    {/* <span className="text-xs leading-tight font-semibold">{titleFirst}</span>{titleSubstr} */}
                    {paper.title}
                </p>
                <div className={paperGradientClasses}/>
                <div className={paperMaskClasses}></div>
                <div className="text-xs z-20 relative text-gray-400" style={{marginTop: "-40px"}}>
                    <p className="flex flex-row items-center">
                        <FaUserFriends/>&nbsp;123
                    </p>
                    <p className="flex flex-row items-center">
                        <BiCalendar/>&nbsp;{paper.date}
                    </p>
                </div>
            </button>
        </>
    );

}