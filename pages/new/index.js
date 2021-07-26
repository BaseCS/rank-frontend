import Head from "next/head";
import Authentication from "../../components/authentication";
import ControlPanel from "../../components/controlPanel";
import ListPanel from "../../components/listPanel";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

    const [institutionList, setInstitutions] = useState([]);

    function test() {
        console.log(process.env.API_URL);
        console.log("something", process.env.NEXTAUTH_URL);
        const api_url = process.env.API_URL;
        axios.get(process.env.API_URL + "/institutions", {
            params: {
                page: 20
            }
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    test();

    // useEffect(() => {
    //     test();
    //     // console.log(process.env.API_URL);
    // }, [])

    const headerClasses = `
        w-screen 
        flex 
        flex-row 
        items-center 
        bg-white
        top-0
        fixed
        z-50
        h-16

        text-gray-600
    `;
    const contentClasses = `

        pt-16
        w-full 
        flex 
        flex-col 
        md:flex-row 
        text-gray-600
    `;
    const sidebarClasses = `
        overflow-x-hidden
        md:overflow-scroll
        md:fixed
        h-full
    `;
    const mainViewClasses = `
    `;
    return(
        <>
            <Head>
                <title>Open Rank</title>
            </Head>
            <div id="header" className={headerClasses}>
                <Authentication/>
            </div>
            <div id="content" className={contentClasses}>
                <div id="sidebar" className={sidebarClasses}>                        
                    <ControlPanel/>
                </div>
                <div id="mainView" className={mainViewClasses}>
                    <ListPanel institutions={institutionList}/>
                </div>
            </div>
            <style jsx>{`
                @media (min-width: 768px) {
                    #sidebar {
                        width: calc(380px - 0.75rem);
                        height: calc(100% - 4rem)
                    }

                    #mainView {
                        margin-left: calc(380px - 0.75rem);
                        width: calc(100% - (380px - 0.75rem));
                    }
                }

                @media (min-width: 1024px) {
                    #sidebar {
                        width: calc(480px - 0.75rem);
                    }

                    #mainView {
                        margin-left: calc(480px - 0.75rem);
                        width: calc(100% - (480px - 0.75rem));
                    }
                }
            `}</style>
        </>
    );
}