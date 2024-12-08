import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { switchMode } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";
// import { Instructor } from "../../../redux/actions";

const useHeader = () => {


  const [showBox, setShowBox] = useState(false)

  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userId = useSelector((state) => state.set_up_user?._id);

  const userMode = useSelector((state) => state.user_mode);

  const handelShowBox = () => {
    setShowBox(!showBox)
  }

  useEffect(() => {
    const fetchInstructorData = async () => {
      try {
        // Ensure userId is available before making the request
        if (!userId) {
          console.warn("User ID is not available.");
          return;
        }

        // Construct the API endpoint dynamically
        const response = await fetch(
          `http://localhost:5000/api/instructor/single-instructor/${userId}`
        );

        // Check if the response is a 404 (not found)
        if (response.status === 404) {
          console.warn("Instructor not found. Clearing local storage.");
          localStorage.setItem("instructor", "");
          dispatch({ type: "INSTRUCTOR", payload: "" }); // Update Redux state
          return;
        }

        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data from the response
        const data = await response.json();

        // Log the data to the console for debugging
        console.log("Instructor data:", data?.instructor);

        // Update local storage and Redux store with the fetched data
        localStorage.setItem("instructor", JSON.stringify(data?.instructor));
        dispatch({ type: "INSTRUCTOR", payload: data?.instructor });
      } catch (error) {
        // Handle any errors during the fetch
        console.error("Error fetching instructor data:", error);
      }
    };

    fetchInstructorData();
  }, [userId, dispatch]);

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