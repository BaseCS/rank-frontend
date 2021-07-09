import { useSession, signIn, signOut } from "next-auth/client";

export default function Authentication() {
    const [session, loading] = useSession();

    const wrapperClasses = `
        box-border
        h-full
        w-full
        lg:w-2/5  
        md:w-1/2
        flex 
        flex-row 
        items-center 
        px-3
        md:pr-9
        space-x-3
    `;

    const buttonClasses = `
        h-10 
        px-3 
        rounded 
        text-white
    `;

    let content;

    if(session) {
        content = <>
            <img src={session.user.image} className="h-10 w-10 rounded-full"></img>
            <p className="flex-grow text-gray-500 font-semibold">{session.user.name}</p>
            <button onClick={signOut} className={buttonClasses + "bg-red-500"}>
                Sign out
            </button>
        </>
    } else {
        content = <>
            <p className="flex-grow text-gray-400">Not signed in</p>
            <button onClick={() => {signIn("github")}} className={buttonClasses + "bg-black"}>
                Sign in with GitHub
            </button>
        </>
    }

    return(
        <div className={wrapperClasses}>
            {content}
        </div>
    );
}