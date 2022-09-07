import { Button } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const ConfigureButton = ({ size, cb }) => {
	const nagivate = useNavigate();
	const { t } = useTranslation();
	return (
		<Button
			size={size}
			onClick={() => {
				!cb ? nagivate("/catalog") : cb();
			}}
			outline={true}
			gradientDuoTone="pinkToOrange"
		>
			{t("configura")}
		</Button>
	);
};
