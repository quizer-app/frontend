import ContentBox from "../layout/ContentBox/ContentBox";
import Title from "../layout/ContentBox/Title";
import Text from "../layout/ContentBox/Text";
import { Button } from "../layout/ContentBox/Button";
import FillHeight from "../layout/Other/FillHeight";
import { Form, Link } from "react-router-dom";
import WarningIcon from "../layout/ContentBox/SvgIcons/WarningIcon";
import { FormInput } from "../layout/ContentBox/FormInput";

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
