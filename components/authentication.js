import { useSession, signIn, signOut } from "next-auth/client";

export default function Authentication() {
    const [session, loading] = useSession();

    const wrapperClasses = `
        box-border
        h-full
        w-full
        flex 
        flex-row 
        items-center 
        space-x-3
        px-4
        md:pl-7
    `;

    const buttonClasses = `
        h-8 
        px-3 
        rounded 
        text-white
    `;

    let content;

    if(session) {
        console.log(session);
        content = <>
            <img src={session.user.image} className="h-10 w-10 rounded-full"></img>
            <div className="flex-grow">
                <p className="font-semibold">{session.user.name}</p>
                <p className="text-xs italic text-gray-400">{session.user.login} # {session.user.id}</p>
            </div>
            <button onClick={signOut} className={buttonClasses + "bg-red-500"}>
                Sign out
            </button>
        </>
    } else {
        content = <>
            <p className="flex-grow">Not signed in</p>
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