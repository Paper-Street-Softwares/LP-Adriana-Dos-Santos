import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";
import { X, MoveRight } from "lucide-react";
import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Dialog } from "primereact/dialog";

export default function FeaturesWithIcons({ colorMode }) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };

  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  // Função para abrir modal de cada card
  const openModal = (cardKey) => {
    const card = content.texts.features[cardKey];

    setModalTitle(t(`features.${cardKey}.title`));

    setModalContent(
      <div className="text-paragraph3 dark:text-black">
        <Trans
          i18nKey={`features.${cardKey}.description`}
          components={{ br: <br /> }}
        />
        <div className="mt-6">
          <Button
            aria-label="Abrir WhatsApp"
            label="Falar no WhatsApp"
            animation={false}
            className="hover:scale-105 bg-buttonColor text-labelButtons dark:text-black"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-whatsapp dark:text-black"
                viewBox="0 0 18 18"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            }
          />
        </div>
      </div>
    );

    setVisible(true);
  };

  return (
    <SectionArea id="service" className={`${bgClass}`} paddingbot={true}>
      <SectionHeader
        className={`text-center ${textClass} dark:text-black`}
        miniTitle={t("features.miniTag")}
        sectionHeaderTitle={t("features.title")}
        sectionHeaderSubtitle={t("features.subtitle")}
        titleColorSet={`${textClass} dark:text-black`}
        subtitleColorSet={`${textClass} dark:text-black`}
        colorMode="dark"
      />
      <SectionWrapper>
        <div className="flex desktop1:mt-[40px] flex-col items-center w-full desktop1:flex-row tablet1:justify-between desktop1:gap-x-0 desktop1:px-0">
          {/* Coluna 1 */}
          <div className="col1 tablet1:w-[50%] desktop1:w-[28%] flex flex-col justify-center items-center">
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card1.icon}
                title={t("features.card1.title")}
                paragraph={t("features.card1.subtitle")}
                className={`tablet1:mb-[16px] desktop1:mb-0 desktop2:mb-[46px] ${textClass} dark:text-black`}
                colorMode={colorMode}
              >
                <Button
                  size="small"
                  className="mt-4 text-labelButtons dark:text-black"
                  label={t("features.card1.buttonLabel")}
                  onClick={() => openModal("card1")}
                  removeAnchor={true}
                  removeTarget={true}
                  animation={true}
                  icon={<MoveRight className="dark:text-black" />}
                />
              </IconFeatureCard>
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card2.icon}
                title={t("features.card2.title")}
                paragraph={t("features.card2.subtitle")}
                className={`${textClass} dark:text-black`}
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
          </div>

          {/* Imagem central */}
          <MotionDivDownToUp className="flex justify-center w-[344px] tablet1:w-[500px] desktop1:w-[35%] tablet2:mb-[120px]">
            <div
              className="h-[640px] tablet1:h-[950px] desktop1:h-[640px] w-full flex col2 rounded-2xl bg-top bg-cover shadow-custom-opacity shadow-shadowFeatures/10"
              style={{
                backgroundImage: `url(${content.texts.features.imgFeatures})`,
              }}
            ></div>
          </MotionDivDownToUp>

          {/* Coluna 3 */}
          <div className="col3 tablet1:w-[50%] desktop1:w-[28%] flex flex-col justify-center items-center">
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card3.icon}
                title={t("features.card3.title")}
                paragraph={t("features.card3.subtitle")}
                className={`tablet1:mb-[16px] desktop1:mb-0 desktop2:mb-[46px] ${textClass} dark:text-black`}
                colorMode={colorMode}
              />
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card4.icon}
                title={t("features.card4.title")}
                paragraph={t("features.card4.subtitle")}
                className={`${textClass} dark:text-black`}
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
          </div>
        </div>
      </SectionWrapper>

      {/* Modal global */}
      <Dialog
        className="font-secondFont dark:text-black"
        closeIcon={<X size={20} className="dark:text-black" />}
        header={<span className="dark:text-black">{modalTitle}</span>}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "60vw", "1024px": "70vw", "641px": "85vw" }}
      >
        {modalContent}
      </Dialog>
    </SectionArea>
  );
}
