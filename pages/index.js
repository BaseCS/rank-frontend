import { useRef, useEffect } from "react";
import Head from "next/head";
import ControlPanel from "../components/controlPanel";
import Authentication from "../components/authentication";

export default function Home() {

    const header = useRef();
    const content = useRef();

    // function resize() {
    //     let headerHeight = header.current.offsetHeight;
    //     let windowHeight = window.innerHeight;
    //     content.current.style.height = (windowHeight - headerHeight) + "px";
    // }

    // useEffect(() => {
    //     resize()
    //     // Executes on every window resize. 
    //     window.addEventListener("resize", resize, false);
    //     return () => {
    //         window.removeEventListener("resize", resize);
    //     }
    // }, []);

    const headerClasses = `
        w-screen 
        flex 
        flex-row 
        items-center 
        bg-black
        top-0
        fixed
        z-50
        h-16
        bg-opacity-0
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
        md:pl-3
        md:overflow-scroll
        md:fixed
        h-full
        pt-16
        -mt-16
    `;
    const listViewClasses = `
    `;

    return(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div ref={header} id="header" className={headerClasses}>
                <Authentication/>
            </div>
            <div ref={content} id="content" className={contentClasses}>
                <div id="sidebar" className={sidebarClasses}>                        
                    <ControlPanel/>
                </div>
                <div id="listView" className={listViewClasses}>
                    <ControlPanel/>
                </div>
            </div>
            <style jsx>{`
                @media (min-width: 768px) {
                    #sidebar {
                        width: calc(380px - 0.75rem);
                    }

                    #listView {
                        margin-left: calc(380px - 0.75rem);
                        width: calc(100% - (380px - 0.75rem));
                    }
                }

                @media (min-width: 1024px) {
                    #sidebar {
                        width: calc(500px - 0.75rem);
                    }

                    #listView {
                        margin-left: calc(500px - 0.75rem);
                        width: calc(100% - (500px - 0.75rem));
                    }
                }
            `}</style>
        </>
    );
}