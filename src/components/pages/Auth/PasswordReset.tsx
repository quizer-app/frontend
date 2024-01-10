import { Button } from "../../layout/ContentBox/Button";
import ContentBox from "../../layout/ContentBox/ContentBox";
import LockIcon from "../../layout/ContentBox/Icons/LockIcon";
import Text from "../../layout/ContentBox/Text";
import Title from "../../layout/ContentBox/Title";
import FillHeight from "../../layout/Background/Background";

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
