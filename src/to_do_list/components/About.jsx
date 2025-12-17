import React from "react";
import Image from "C:/react/first/first/src/todo.png";

function About(){
    return (
        <> <img src={Image} height="500px" width="auto"/>
        <h1>

About This Project</h1>

<h2>This app was built to manage daily tasks like studying, coding, sleeping, and procrastinating (mostly procrastinating).

Tasks may be added instantly, but completing them is still under development.</h2>
        <h3>Use this to remember tasks that my brain promises to remember but always forgets.

If you see tasks here, congratulations — at least they are written somewhere.</h3>
        </>
    )
}
export default About ;