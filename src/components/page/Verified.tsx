import ContentBox from "../layout/ContentBox/ContentBox";
import Title from "../layout/ContentBox/Title";
import Text from "../layout/ContentBox/Text";
import { Button } from "../layout/ContentBox/Button";
import FillHeight from "../layout/Other/FillHeight";
import { Link } from "react-router-dom";

export default function Verified() {
  return (
    <>
      <ContentBox>
        <Title>Email verified successfully</Title>
        <Text className="text-lg font-bold text-textHover">
          Congratulations Username!
        </Text>
        <Text className="mb-2">Thank you, your email has been verified.</Text>
        <Text> Your account is now active.</Text>

        <Link to={"/"}>
          <Button>Go To Home Page</Button>
        </Link>

        {/* <Button>
          <Link to={"/"}>Go To Home Page<Link/>
        </Button> */}
      </ContentBox>
      <FillHeight />
    </>
  );
}
