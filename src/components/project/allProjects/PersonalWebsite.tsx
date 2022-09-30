import * as React from "react";
import GradientContent from "../../shared/GradientContent";
import Image from "../Image";
import Link from "../Link";
import ProjectPage from "../ProjectPage";
import SectionHeader from "../SectionHeader";
import SubsectionHeader from "../SubsectionHeader";
import Text from "../Text";
const PersonalWebsite: React.FC<{}> = (props) => {

    const setupRef = React.useRef<HTMLDivElement | null>(null);
    const mvpRef = React.useRef<HTMLDivElement | null>(null);
    const stretch1ref = React.useRef<HTMLDivElement | null>(null);
    const stretch2ref = React.useRef<HTMLDivElement | null>(null);
    const submissionRef = React.useRef<HTMLDivElement | null>(null);

    const goToSetup = () => {
        if (setupRef.current) {
            window.scrollTo({
                top: setupRef.current.offsetTop,
            });
        }
    }

    const goToMVP = () => {
        if (mvpRef.current) {
            window.scrollTo({
                top: mvpRef.current.offsetTop,
            });
        }
    }

    const goToStretch1 = () => {
        if (stretch1ref.current) {
            window.scrollTo({

                top: stretch1ref.current.offsetTop,

            });
        }
    }

    const goToStretch2 = () => {
        if (stretch2ref.current) {
            window.scrollTo({
                top: stretch2ref.current.offsetTop,
            });
        }
    }

    const goToSubmission = () => {
        if (submissionRef.current) {
            window.scrollTo({
                top: submissionRef.current.offsetTop,
            });
        }
    }

    // https://ibb.co/T4Br7sB
    // https://ibb.co/mG0HrM8
    // https://ibb.co/0M9zPcJ


    return (
        <ProjectPage
            title={"Personal Website"}
        >
            <GradientContent move={false}>
                <SectionHeader
                    content={"Table of Contents"}
                />
                <Link
                    text={"Setup"}
                    action={goToSetup}
                />
                <Link
                    text={"MVP"}
                    action={goToMVP}
                />

                <Link
                    text={"Stretch #1"}
                    action={goToStretch1}
                />

                <Link
                    text={"Stretch #2"}
                    action={goToStretch2}
                />

                <Link
                    text={"How to submit"}
                    action={goToSubmission}
                />
                <br />
                <br />

                <SectionHeader
                    content={"How to use this workshop"}
                />
                <Text>
                    Use this workshop as a guide to build your personal website. Have this workshop on one screen, and your code editor in the other. If you need to set this up, go to the "Setup" section.
                </Text>
                <br />
                <Text>
                    Complete the MVP first, which is a basic personal website.
                </Text>
                <Text>
                    If you're finished and want to do more, you should do Stretches to add more features to your website.
                </Text>
                <br />
                <Text>
                    If you already started the workshop, use the Table of Contents to skip over to where you last left off.
                </Text>
                <br />
                <br />


                <SectionHeader
                    content={"Timeline"}
                />
                <Text>
                    You'll have meetups 1-3 to build your personal website.
                </Text>
                <Text>
                    On meetup 4, we’ll put everyone's websites together to create one "mega-site"
                </Text>
                <br />
                <br />

                <div ref={setupRef}>
                    <SectionHeader
                        content={"Getting Set Up"}
                    />
                    <p className={"font-Poppins text-zinc-300 font-thin"}>Run through this section if:</p>
                    <p className={"font-Poppins text-zinc-300 font-thin"}>- You need to set up repl.it</p>
                    <p className={"font-Poppins text-zinc-300 font-thin"}>- You need to set up split screen on MacBook</p>
                </div>
                <SubsectionHeader content={"If you don’t have a replit account: Sign up for repl.it"} />
                <Text>
                    You’ll need a replit account to create your project. <br />

                    Repl.it is a free platform we use that lets you build websites on the cloud.<br /><br />

                    Create an account on <Link text={"repl.it"} link={"https://repl.it"} />, then when you get to this screen: <br />

                    <img className={"w-2xl max-w-full my-10"} src="https://i.ibb.co/k4gMwtg/coding-tutorial.png" alt="coding-tutorial" />

                    <br />
                    Pick “No, I got this” to avoid additional setup. Then come back here.

                </Text>
                <SubsectionHeader content={"If you have a replit account: Sign back into repl.it"} />
                <Text>
                    Just click “Log In” at the top right-hand corner, then sign in using your credentials.
                </Text>
                <SubsectionHeader content={"How to split screen the workshop and your repl.it code editor"} />
                <Text>
                    1) Open two Safari windows -- One with Replit, one with this workshop <br />
                    2) Hover your mouse over the green button on one of the windows <br />
                    3) Hold down left click on the green button. You should get a popup like this: <br />
                </Text>
                <img className={"w-2xl max-w-full my-10"} src="https://i.ibb.co/xDYMKRH/enter-full-screen.png" alt="enter-fullscreen" />
                <Text>
                    4) Click “Tile Window to Left of Screen”<br />
                    5) You should get a screen like this:<br />
                </Text>
                <img className={"w-2xl max-w-full my-10"} src="https://i.ibb.co/hWdTpy8/split-screen.png" alt="split-screen" />
                <Text>
                    6) Click on the other tab, then you're set!<br />
                </Text>
                <br />
                <div ref={mvpRef}>
                    <SectionHeader
                        content={"MVP"}
                    />
                </div>
                <Text>
                    Go to <Link text={"the Personal Website Workshop"} link={"https://workshops.hackclub.com/personal_website/"} />  for the “base” workshop
                    <br />
                    <br />

                    This is on the Hack Club organization’s website (JHHS Hack Club is a branch of the nonprofit Hack Club), so just note that it’s on a different website.
                </Text>
                <br />
                <br />

                <div ref={stretch1ref}>
                    <SectionHeader
                        content={"Stretch #1"}
                    />
                    <p className={"mt-0 text-zinc-200 text-lg font-Poppins font-regular "}>Add more features, details, and styling to your site</p>
                    <br />

                    <Text>
                        Go to <Link text={"the Stretch #1 Notion Page"} link={"https://spot-butterfly-490.notion.site/Stretch-1-246fba5decea423f87c83fd52a2a3277"} />  for Stretch #1
                    </Text>
                </div>
                <br />
                <br />
                <div ref={stretch2ref}>
                    <SectionHeader
                        content={"Stretch #2"}
                    />
                    <p className={"mt-0 text-zinc-200 text-lg font-Poppins font-regular "}>Add dark mode and animations to your sites</p>
                    <br />

                    <Text>
                        Go to <Link text={"the Stretch #2 Notion Page"} link={"https://spot-butterfly-490.notion.site/Stretch-2-f2952126c6704585b4828e5486181c9c"} />  for Stretch #2
                    </Text>

                </div>
                <br />
                <div className={"h-1 bg-zinc-600"}></div>
                <br />
                <div ref={submissionRef}>
                    <SectionHeader
                        content={"How to submit your website"}
                    />
                    <Text>
                        First, click your website's link at the location shown in the image:
                    </Text>
                    <img className={"w-2xl max-w-full my-10"} src="https://i.ibb.co/tBkJnsJ/copy-this-link.png" alt="replit-link" />

                    <Text>
                        This will select it for you. Once selected, do Command+C (hold command, then click C) to copy it onto your keyboard.
                    </Text>

                    <br />
                    <Text>
                        Then, submit that link to the <Link text={"Personal Website Submission Form"} link={"https://1htona3vpjh.typeform.com/to/fuR1LL5n"} />.
                        Your website will be on the personal website mega-site at the start of the next meetup!

                    </Text>








                </div>
                <br />


            </GradientContent>
        </ProjectPage >
    );
}
export default PersonalWebsite