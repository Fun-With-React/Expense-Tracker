import Image from "react-bootstrap/Image";
const Avatar = () => {
  return (
    <>
      <Image thumbnail={true} roundedCircle={true} src="https://www.stevensegallery.com/50/50" alt="profile image" />;
    </>
  );
};

export default Avatar;
