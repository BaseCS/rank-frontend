import ControlPanel from "../components/controlPanel";

export default function Home() {

    const mainClasses = `
        w-screen 
        h-screen 
        flex 
        flex-col
    `;
    const headerClasses = `
        flex-shrink-0 
        md:pl-4 
        w-screen 
        min-h-16 
        h-16 
        flex 
        flex-row 
        justify-center 
        md:justify-start 
        items-center 
        bg-blue-50
    `;
    const contentClasses = `
        w-screen 
        flex-grow 
        flex 
        flex-col 
        md:flex-row 
        md:space-x-4 
        md:p-4
    `;
    const sidebarClasses = `
        lg:h-full 
        md:w-1/2 
        lg:w-1/3 
        md:space-y-4 
        divide-gray-200 
        divide-y-2 
        md:divide-y-0
    `;
    const listViewClasses = `
        md:w-1/2 
        lg:w-2/3 
        flex-grow 
        p-4
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
            <div id="main" className={mainClasses}>
                <div id="header" className={headerClasses}>
                    HEADER
                </div>
                <div id="content" className={contentClasses}>
                    <div id="sidebar" className={sidebarClasses}>                        
                        <ControlPanel></ControlPanel>
                    </div>
                    <div id="listView" className={listViewClasses}>
                        LIST VIEW
                    </div>
                </div>
                <div id="footer" className={footerClasses}>
                    FOOTER
                </div>
            </div>
        </>
    );
}