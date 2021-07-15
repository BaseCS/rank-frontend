import Head from "next/head";
import Authentication from "../components/authentication";
import ControlPanel from "../components/controlPanel";
import ListPanel from "../components/listPanel";

export default function Home() {

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

        text-gray-500
        backdrop-filter
        backdrop-blur-xl
    `;
    const contentClasses = `
        pt-16
        w-full 
        flex 
        flex-col 
        md:flex-row 
    `;
    const sidebarClasses = `
        md:overflow-scroll
        md:fixed
        h-full
    `;
    const listViewClasses = `
    `;
    return(
        <>
            <Head>
                <title>Dank Rank</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div id="header" className={headerClasses}>
                <Authentication/>
            </div>
            <div id="content" className={contentClasses}>
                <div id="sidebar" className={sidebarClasses}>                        
                    <ControlPanel/>
                </div>
                <div id="listView" className={listViewClasses}>
                    <ListPanel/>
                </div>
            </div>
            <style jsx>{`
                @media (min-width: 768px) {
                    #sidebar {
                        width: calc(380px - 0.75rem);
                        height: calc(100% - 4rem)
                    }

                    #listView {
                        margin-left: calc(380px - 0.75rem);
                        width: calc(100% - (380px - 0.75rem));
                    }
                }

                @media (min-width: 1024px) {
                    #sidebar {
                        width: calc(480px - 0.75rem);
                    }

                    #listView {
                        margin-left: calc(480px - 0.75rem);
                        width: calc(100% - (480px - 0.75rem));
                    }
                }
            `}</style>
        </>
    );
}