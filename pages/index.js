import { useRef, useEffect } from "react";
import Head from "next/head";
import ControlPanel from "../components/controlPanel";
import Authentication from "../components/authentication";

export default function Home() {

    const header = useRef();
    const content = useRef();

    function resize() {
        let headerHeight = header.current.offsetHeight;
        let windowHeight = window.innerHeight;
        content.current.style.height = (windowHeight - headerHeight) + "px";
    }

    useEffect(() => {
        resize()
        // Executes on every window resize. 
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, []);

    useEffect(() => {
        resize()
        // Executes on every touch start. 
        window.addEventListener("touchstart", resize);
        return () => {
            window.removeEventListener("touchstart", resize);
        }
    }, []);

    const headerClasses = `
        md:pl-4 
        w-screen 
        flex 
        flex-row 
        items-center 
        bg-blue-50
        top-0
        fixed
        z-50
        h-16
    `;
    const contentClasses = `
        overflow-scroll
        md:overflow-hidden
        mt-16
        w-full 
        flex 
        flex-col 
        md:flex-row 
        overscroll-none
    `;
    const sidebarClasses = `
        lg:w-2/5  
        md:w-1/2 
    `;
    const listViewClasses = `
        md:w-1/2 
        lg:w-3/5 
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
                    
                </div>
            </div>
            <style jsx>{`
                html {
                    overflow: hidden;
                    height: 100%;
                }

                body {
                    height: 100%;
                    overflow: auto;
                }
            `}</style>
        </>
    );
}