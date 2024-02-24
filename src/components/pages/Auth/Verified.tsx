import { Link } from "@tanstack/react-router";
import FillHeight from "../../layout/Background/Background";
import { Button } from "../../layout/ContentBox/Button";
import ContentBox from "../../layout/ContentBox/ContentBox";
import CheckmarkIcon from "../../layout/ContentBox/Icons/CheckmarkIcon";
import Text from "../../layout/ContentBox/Text";
import Title from "../../layout/ContentBox/Title";

export default function Verified() {
  return (
    <>
      <ContentBox>
        <CheckmarkIcon />
        <Title>Email verified successfully</Title>
        <Text className="text-lg font-bold text-textHover mb-8">
          Congratulations Username!
        </Text>
        <Text className="mb-2">Thank you, your email has been verified.</Text>
        <Text> Your account is now active. Have fun!</Text>
        <Link to={"/"}>
          <Button>Go To Home Page</Button>
        </Link>
      </ContentBox>
      <FillHeight />
    </>
  );
}
