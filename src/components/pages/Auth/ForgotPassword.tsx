import { Link } from "react-router-dom";
import { Button } from "../../layout/ContentBox/Button";
import ContentBox from "../../layout/ContentBox/ContentBox";
import WarningIcon from "../../layout/ContentBox/Icons/WarningIcon";
import Text from "../../layout/ContentBox/Text";
import Title from "../../layout/ContentBox/Title";
import FillHeight from "../../layout/Other/FillHeight";

export default function ForgotPassword() {
  return (
    <>
      <ContentBox>
        <WarningIcon />
        <Title>Reset Password</Title>
        <Text className="mb-2">Forgot your password? No worries...</Text>
        <Text>
          Enter your email and we'll send you a link to reset your password
        </Text>
        {/* <form><InputForm /> here</form> */}
        <Link to={"/"}>
          <Button>Request Password Change</Button>
        </Link>
      </ContentBox>
      <FillHeight />
    </>
  );
}
