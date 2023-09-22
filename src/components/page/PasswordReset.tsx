import ContentBox from "../layout/ContentBox/ContentBox";
import Title from "../layout/ContentBox/Title";
import Text from "../layout/ContentBox/Text";
import { Button } from "../layout/ContentBox/Button";
import FillHeight from "../layout/Other/FillHeight";
import { Link } from "react-router-dom";
import LockIcon from "../layout/ContentBox/SvgIcons/LockIcon";

export default function PasswordReset() {
  return (
    <>
      <ContentBox>
        <LockIcon />
        <Title>Reset Password</Title>

        <form>
          <Text>2 Inputs here. New password and confirm new password</Text>
          <Button>Reset Password</Button>
        </form>
      </ContentBox>
      <FillHeight />
    </>
  );
}
