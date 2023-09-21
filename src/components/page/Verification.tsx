import ContentBox from "../layout/ContentBox/ContentBox";
import Title from "../layout/ContentBox/Title";
import Text from "../layout/ContentBox/Text";
import { Button } from "../layout/ContentBox/Button";
import { useParams } from "react-router-dom";
import FillHeight from "../layout/Other/FillHeight";

export default function Verification() {
  const { token } = useParams();

  return (
    <>
      <ContentBox>
        <Title>Please verify your email</Title>
        <Text className="mb-3">You're almost there! We sent an email to</Text>
        <Text className="text-lg font-bold text-textHover">
          szymonbudziakj@gmail.com
        </Text>
        <Text>
          Just click on the link in that email to complete your signup. If you
          don't see it, make sure to check the spam folder.
        </Text>
        <Text className="mb-8">Still can't find the email?</Text>
        <Button>Resend Verification Email</Button>
      </ContentBox>
      <FillHeight />
    </>
  );
}
