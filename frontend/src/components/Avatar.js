import Image from "react-bootstrap/Image";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { logOut } from "../reducers/userReducer";
import Login from "./Login";
const Avatar = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.loginSlice);
  const logOutHandler = () => {
    dispatch(logOut());
  };
  return (
    <>
      <Image className = 'mx-5'thumbnail={true} roundedCircle={true} src="https://www.stevensegallery.com/50/50" alt="profile image"/><br/>
      {token ? <Button onClick={logOutHandler}> Logout </Button>  : <Login />}  
        
        
    </>
  );
};

export default Avatar;
