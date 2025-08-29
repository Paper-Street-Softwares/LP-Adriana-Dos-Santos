import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionWrapper from "../sectionElements/SectionWrapper";
import AccordionExpandDefault from "../interactives/AcordionTwo";
import Button from "../interactives/Button";
import content from "../../content/content";

export default function Faq({ colorMode = "default" }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Cores fixas (mantendo o mesmo visual mesmo em dark mode do navegador)
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white dark:text-white",
    light: "text-black dark:text-black",
    default: "text-black dark:text-black",
  };

  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;
  const subtitleColor = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea id="faq" className={`${bgClass}`}>
      <SectionHeader
        colorMode="dark"
        className="text-center"
        miniTitle={t("faq.miniTag")}
        sectionHeaderTitle={t("faq.title")}
        sectionHeaderSubtitle={t("faq.subtitle")}
        titleColorSet={titleColor}
        subtitleColorSet={subtitleColor}
      />
      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp className="flex justify-center w-full">
          <div className="w-[90%] tablet1:w-[80%] desktop1:w-[80%] max-w-[860px] mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]">
            <AccordionExpandDefault />
          </div>
        </MotionDivDownToUp>
        <MotionDivDownToUp>
          <Paragraphs className={`text-center transition ${subtitleColor}`}>
            <Button
              className="hoover:scale-0 desktop1:hover:scale-10 transition-all duration-300"
              color=""
              label={t("faq.paragraph")}
              colorMode={colorMode}
            />
          </Paragraphs>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
