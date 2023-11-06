import * as React from "react";
import { WORKSHOPS } from "../../constants/workshops";
import WorkshopItem from "./WorkshopItem";
import WorkshopsHeader from "./WorkshopsHeader";

const Workshops: React.FC<{}> = (props) => {

    const currentWorkshops = WORKSHOPS.filter((workshop) => {
        return !workshop.completed
    });

    const completedWorkshops = WORKSHOPS.filter((workshop) => {
        return workshop.completed
    });

    return (
        <div className={"bg-gradient-to-b from-neutral-800 to-neutral-900 p-5 min-h-screen"}>
            <WorkshopsHeader />
            <div className={"max-w-5xl mx-auto my-5 mt-10 px-0 md:px-10"}>
                <h3 className={"text-xl text-orange-500 font-bold font-Poppins"}>What we're doing now 🎯</h3>
                <div className={" flex flex-col gap-5 mt-5"}>
                    {currentWorkshops.map((workshop, index) => {
                        return (
                            <WorkshopItem
                                key={index}
                                id={workshop.id}
                                image={workshop.image}
                                title={workshop.name}
                                workshopNumber={workshop.number}
                                description={workshop.description}
                                customUrl={workshop.customUrl}
                                startDate={workshop.startDate}
                                endDate={workshop.endDate}
                                customBgColor={workshop.bgColor}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={"max-w-5xl mx-auto my-5 mt-20 px-0 md:px-10"}>
                <h3 className={"text-xl text-green-500 font-bold font-Poppins"}>Finished workshops ✅</h3>
                <div className={"mt-5 space-y-5"}>
                    {completedWorkshops.map((workshop, index) => {
                        return (
                            <WorkshopItem
                                key={index}
                                id={workshop.id}
                                image={workshop.image}
                                title={workshop.name}
                                workshopNumber={workshop.number}
                                customUrl={workshop.customUrl}
                                description={workshop.description}
                                startDate={workshop.startDate}
                                endDate={workshop.endDate}
                            />
                        )
                    })}
                </div>
            </div>
            <br />

        </div>
    );
}
export default Workshops