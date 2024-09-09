import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Paid by other
        </Typography>
        <Typography color={medium}>Got something</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/malkavian.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Theodore Kontos</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Your pathway to redemption and remediation 
        is perilous and long. Seek guidance now!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;