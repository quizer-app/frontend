interface UserInfoProps {
  username: string;
}

export default function UserInfo({ username }: UserInfoProps) {
  return (
    <div>
      <div>{username}</div>
    </div>
  );
}
