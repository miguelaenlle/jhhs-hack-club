import * as React from "react";
import GradientContent from "../../shared/GradientContent";
// import { Widget } from "@typeform/embed-react";
import { stuffWeDo } from "../../../constants/stuff-we-do";
import ContentHeader from "./ContentHeader";
import StuffCell from "./StuffCell";
const Content: React.FC<{}> = (props) => {
  const root = document.getElementById("root") as HTMLElement;

  return (
    <GradientContent move={true}>
      <div className={"border-b-2 border-b-slate-700 py-16"}>
        <ContentHeader
          text={"What do we do at JHHS Hack Club?"}
        />
        <br />
        <div className={"flex gap-4"}>
          {stuffWeDo.map((item, index) => {
            return (
              <StuffCell
                key={`stuff-${index}`}
                header={item.header}
                text={item.text}
                startColor={item.startColor}
                endColor={item.endColor}
              />
            )
          })}
        </div>
      </div>
    </GradientContent>
  );
};
export default Content;
