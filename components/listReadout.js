import { FaFileAlt, FaHashtag, FaList, FaUserFriends } from "react-icons/fa";

export default function ListReadout(props) {

    const rank = props.data.rank;
    const score = props.data.score;
    const publications = props.data.publications;
    const people = props.data.people;

    const rankString = String(rank);
    const suffix = rankString[rankString.length - 1] == "1" ? "st" : (rankString[rankString.length - 1] == "2" ? "nd" : (rankString[rankString.length - 1] == "3" ? "rd" : "th"));
    const readoutClasses = "w-1/4 text-center flex-shrink-0";
    const readoutMainClasses = "font-semibold text-green-500 truncate";
    const readoutSubClasses = "text-sm text-gray-400 truncate";
    const readoutIconClasses = "mx-auto w-5 h-5 mb-1";

    return(
        <div className="flex flex-row">
            <div className={readoutClasses}>
                <FaFileAlt className={readoutIconClasses}/>
                <p className={readoutMainClasses}>
                    {publications}
                </p>
                <p className={readoutSubClasses}>
                    {publications > 1 ? "Publications" : "Publication"}
                </p>
            </div>
            <div className={readoutClasses}>
                <FaUserFriends className={readoutIconClasses}/>
                <p className={readoutMainClasses}>
                    {people}
                </p>
                <p className={readoutSubClasses}>
                    {people > 1 ? "People" : "Person"}
                </p>
            </div>
            <div className={readoutClasses}>
                <FaList className={readoutIconClasses}/>
                <p className={readoutMainClasses}>
                    {rank}<span className="font-normal italic">{suffix}</span>
                </p>
                <p className={readoutSubClasses}>Index</p>
            </div>
            <div className={readoutClasses}>
                <FaHashtag className={readoutIconClasses}/>
                <p className={readoutMainClasses}>
                    {score}
                </p>
                <p className={readoutSubClasses}>Score</p>
            </div>
        </div>
    );
}