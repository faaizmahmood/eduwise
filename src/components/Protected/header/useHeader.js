import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { switchMode } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";

const useHeader = () => {


  const [showBox, setShowBox] = useState(false)

  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userMode = useSelector((state) => state.user_mode);

  const handelShowBox = () => {
    setShowBox(!showBox)
  }

  const logout = () => {

    localStorage.removeItem("currentUser")

    localStorage.removeItem("user_mode")

    navigate("/");

    location.reload();

  }

  const handleSwitch = (event) => {

    setChecked(event.target.checked);

    console.log("Switch is now:", event.target.checked);

    dispatch(switchMode(event.target.checked))

    navigate("/");

    location.reload()

  }

  return {
    handelShowBox,
    showBox,
    logout,
    handleSwitch,
    checked,
    userMode
  }

}

export default useHeader