import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useInstructorProfile = () => {

  const [instructor, setInstructor] = useState(null);

  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  const { InstructorID } = useParams()

  const navigate = useNavigate()

  useEffect(() => {

    const fetchInstructorProfile = async () => {
      try {

        setLoading(true);

        const response = await fetch(
          `http://localhost:5000/api/instructor/instructor-profile/${InstructorID}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch instructor profile");
        }

        const data = await response.json();

        setInstructor(data.instructor);

        setCourses(data.courses);

      } catch (error) {

        toast.error("Error fetching instructor profile");

        navigate('/')

        console.error("Fetch error:", error);

      } finally {

        setLoading(false);

      }
    };

    fetchInstructorProfile();

  }, []);

  return {
    instructor,
    courses,
    loading,
  };
};

export default useInstructorProfile;
