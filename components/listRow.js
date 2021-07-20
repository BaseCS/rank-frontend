import { useState } from "react";
import { FaGraduationCap, FaFileAlt, FaUserFriends } from "react-icons/fa";
import ListReadout from "./listReadout";
import ListGraph from "./listGraph";
import ListPaperCarousel from "./listPaperCarousel";
import SideScroll from "./sideScroll";
import PersonCard from "./personCard";
import PaperCard from "./paperCard";

export default function ListRow(props) {

    const name = "EMESCAM - Escola Superior de Ciências da Santa Casa de Misericórdia de Vitória";
    const type = "University";
    const country = "US";
    const rank = 1;
    const score = 123456;
    const publications = 123456;
    const people = 123456;
    const [show, setShow] = useState(false);

    function toggleShow() {
        setShow(!show);
    }

    const wrapperClasses = `
        overflow-hidden
        listRow
        w-full
        md:rounded
        filter
    ` + (show ? " bg-gray-100 md:my-4 active" : "")
    ;
    const mainClasses = `
        w-full
        flex
        flex-row
        py-3
        px-4
        md:px-3
        group
    ` + (show ? " bg-gray-200 md:bg-transparent" : "")
    ;
    const nameWrapperClasses = `
        flex-grow
        overflow-hidden
    `;
    const nameClasses = `
        text-left
        font-semibold
        group-hover:text-green-500
    ` + (show ? " leading-tight my-0.5" : " truncate")
    ;
    const defaultFieldClasses = `
        field
        h-full
        flex
        flex-col
        items-center
        justify-center
        flex-shrink-0
        px-1
        lg:w-24
        w-16
    `;
    const countClasses = defaultFieldClasses + `
        hidden
        md:flex
    `;
    const fieldGroupClasses = `
        w-full
        text-sm
        flex
        flex-col
        items-center
        filter
    `;
    const iconClasses = `
        h-4
        w-4
        mt-1
        mb-1
        group-hover:text-green-500
    `;
    const contentClasses = `
        content 
        px-4 
        md:px-3
        overflow-hidden
    ` + (show ? " py-3" : " py-0");
    const borderClasses = `
        bg-gray-300 
        h-px 
        my-3`;
    const subTitleClasses = "mb-3";

    let flagID = "flag-icon-" + country.toLowerCase();
    let flag = <div className={flagID + " flag-icon-background mr-1 rounded-sm flex-shrink-0"} style={{height: "0.9rem", width: "1.2rem", backgroundSize: "cover"}}/>;

    let content = <></>;

    if (show) {
        const readoutData = {
            rank: rank,
            score: score,
            publications: publications,
            people: people
        }
        const graphData = [215, 124, 74, 61, 54, 45, 184, 14, 123, 91];
        const graphStart = 12;
        const paperList = [
            {title: "Lorem Ipsum Dolor sit Amet", date: "01/23/45"},
            {title: "Consectetur Adipiscing Elit", date: "01/23/45"},
            {title: "Sed do Eiusmod Tempor Incididunt ut Labore", date: "01/23/45"},
            {title: "Ut Enim ad Minim Veniam", date: "01/23/45"},
            {title: "Quis Nostrud Exercitation Ullamco Laboris Nisi ut Aliquip ex ea Commodo Consequat", date: "01/23/45"},
            {title: "Lorem Ipsum Dolor sit Amet", date: "01/23/45"},
            {title: "Consectetur Adipiscing Elit", date: "01/23/45"},
            {title: "Sed do Eiusmod Tempor Incididunt ut Labore", date: "01/23/45"},
            {title: "Ut Enim ad Minim Veniam", date: "01/23/45"},
            {title: "Quis Nostrud Exercitation Ullamco Laboris Nisi ut Aliquip ex ea Commodo Consequat", date: "01/23/45"}
        ];
        const peopleList = [
            {name: "Ketan Meyer-Patel"},
            {name: "Mohit Bansal"},
            {name: "Jan-Michael Frahm"},
            {name: "Samarjit Chakraborty"},
            {name: "Ron Alterovitz"},
            {name: "James H. Anderson"},
            {name: "Michael K. Reiter"},
            {name: "Dinggang Shen"},
            {name: "Henry Fuchs"},
            {name: "Marc Niethammer"},
            {name: "Junier B. Oliva"},
            {name: "Shashank Srivastava"},
            {name: "Snigdha Chaturvedi"},
            {name: "Fabian Monrose"},
            {name: "Colin Raffel"},
            {name: "David Gotz"},
            {name: "Shahriar Nirjon"},
            {name: "Parasara Sridhar Duggirala"},
            {name: "Donald E. Porter"},
            {name: "Quoc Tran-Dinh"},
            {name: "Cynthia Sturton"},
            {name: "Leonard McMillan"},
            {name: "Montek Singh"},
        ]

        content = 
        <>  
            <ListReadout data={readoutData}/>

            <div className={borderClasses}/>

            <p className={subTitleClasses}>Yearly Publication History</p>
            <ListGraph data={graphData} start={graphStart}/>

            <div className={borderClasses}/>

            <p className={subTitleClasses}>Recent Publications</p>
            <SideScroll height="8rem">
                {paperList.map((paper, index)=>{
                    return(
                        <PaperCard key={index} data={paper}/>
                    );
                })}
            </SideScroll>

            <div className={borderClasses}/>

            <p className={subTitleClasses}>Affiliated People</p>
            <SideScroll height="3.25rem">
                {peopleList.map((person, index) => {
                    return(
                        <PersonCard key={index} data={person}/>
                    );
                })}
            </SideScroll>
        </>;
    }

    return(
        <>
            <div className={wrapperClasses}>
                <button onClick={toggleShow} className={mainClasses} title={name}>
                    <div className={nameWrapperClasses}>
                        <p className={nameClasses}>
                            {name}
                        </p>
                        <div className="text-sm text-gray-400 flex items-center">
                            {flag}
                            <p className="pr-2 border-gray-300 border-r mr-2 flex-shrink-0">
                                {country}
                            </p>
                            <FaGraduationCap className="h-5 w-5 mr-1 flex-shrink-0"/>
                            <p className="truncate text-left">
                                {type}
                            </p>
                        </div>
                    </div>
                    {!show && <>
                        <div className={countClasses}>
                            <div className={fieldGroupClasses}>
                                <FaFileAlt className={iconClasses}/>
                                <span className="text-gray-400 truncate w-full">
                                    {publications}
                                </span>
                            </div>
                        </div>
                        <div className={countClasses}>
                            <div className={fieldGroupClasses}>
                                <FaUserFriends className={iconClasses}/>
                                <span className="text-gray-400 truncate w-full">
                                    {people}
                                </span>
                            </div>
                        </div>
                        <div className={defaultFieldClasses}>
                            <p className="text-green-500 font-semibold truncate w-full">
                                {rank}
                            </p>
                            <p className="text-sm text-gray-400 truncate w-full">
                                {score}
                            </p>
                        </div>
                    </>}
                </button>
                {show && 
                    <div className="h-px bg-gray-300 mx-3 hidden md:block"/>
                }
                <div className={contentClasses}>
                    {content}
                </div>
            </div>
            <style jsx>{`
                .listRow {
                    transition: margin 300ms;
                }

                .listRow + .listRow {
                    // border-top: 1px solid #D1D5DB;
                }

                .listRow:last-child {
                    margin-bottom: 0;
                }

                .content {
                    transition: padding 300ms;
                }

                @media (max-width: 767px) {
                    .listRow:nth-child(odd) {
                        background: #F9FAFB;
                    }

                    .listRow.active + .listRow.active {
                        // border-top: 1px solid #D1D5DB;
                        border-top: 0;
                    }

                    .listRow.active {
                        border-top: 1px solid #D1D5DB;
                        border-bottom: 1px solid #D1D5DB;
                    }

                    .listRow:last-of-type {
                        border-bottom: 0;
                        margin-bottom: 0;
                    }
    
                    .listRow:first-of-type {
                        border-top: 0;
                    }
                }
            `}</style>
        </>
    );
}