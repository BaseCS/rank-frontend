import ControlPanel from "../components/controlPanel";
import Authentication from "../components/authentication";

export default function Home() {

    const headerClasses = `
        md:pl-4 
        w-screen 
        h-16 
        flex 
        flex-row 
        items-center 
        bg-blue-50
        top-0
        fixed
        z-50
    `;
    const contentClasses = `
        overflow-scroll
        md:overflow-hidden
        w-screen 
        flex 
        flex-col 
        md:flex-row 
        bg-red-500
    `;
    const sidebarClasses = `
        lg:w-2/5  
        md:w-1/2 
    `;
    const listViewClasses = `
        md:w-1/2 
        lg:w-3/5 
        flex-grow 
    `;
    const footerClasses = `
        flex-shrink-0 
        w-screen 
        min-h-16 
        h-16 
        flex 
        justify-center 
        items-center 
        bg-blue-50
    `;

    return(
        <>
            <div id="header" className={headerClasses}>
                <Authentication/>
            </div>
            <div id="content" className={contentClasses} style={{height: "calc(100vh - 4rem)"}}>
                <div id="sidebar" className={sidebarClasses}>                        
                    <ControlPanel/>
                </div>
                <div id="listView" className={listViewClasses}>
                    
                </div>
            </div>
            {/* <style jsx>{`
                #content {
                    height: calc(100vh - 8rem);
                }
            `}</style> */}
        </>
    );
}