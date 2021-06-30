import React from "react";
import { useTranslation } from "react-i18next";
import { AddonModel } from "@stephenpoole/deadbydaylight";
import Tooltip from "./Tooltip";
import ClassName from "../../util/className";
import Translation from "../../util/translation";

type Props = Pick<AddonModel, "rarity" | "name" | "description" | "flavor" | "owner" | "type">;

const AddonTooltip = ({
    rarity: rarityNum,
    name,
    description,
    flavor,
    type,
    owner,
}: Props): JSX.Element => {
    const { t } = useTranslation();
    const rarityKey = Translation.rarity(rarityNum);
    const rarityClass = ClassName.rarity(rarityNum);
    const subtitle = t("addonSubtitle.named", {
        rarity: t(rarityKey),
        name: owner.isEmpty ? t(Translation.item(type)) : owner.power?.name,
    });

    return (
        <Tooltip className="addon-tooltip">
            <div className={`tooltip-banner ${rarityClass}`}>
                <div className="tooltip-title-left">
                    <h2 className="tooltip-title">{name}</h2>
                    <p className="tooltip-subtitle">{subtitle}</p>
                </div>
            </div>
            <div className="tooltip-body">
                <div className="tooltip-text" dangerouslySetInnerHTML={{ __html: description }} />
                {flavor && (
                    <div className="tooltip-flavor" dangerouslySetInnerHTML={{ __html: flavor }} />
                )}
                <div className="tooltip-gradient" />
            </div>
        </Tooltip>
    );
};

export default AddonTooltip;