/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useSavedCourses = () => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [savedCourses, setSavedCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);

    const currentUser = useSelector((state) => state.set_up_user);

    // Initialize savedCourses and filteredCourses
    useEffect(() => {
        setLoading(true);
        if (currentUser?.wishlist) {
            setSavedCourses(currentUser.wishlist);
            setFilteredCourses(currentUser.wishlist);
        }

        setTimeout(() => {
            setLoading(false);
        }, 2000);
        
    }, [currentUser]);

    // Handle search term changes
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter courses based on search term
    useEffect(() => {
        if (!searchTerm.trim()) {
            // If no search term, reset to original savedCourses
            setFilteredCourses(savedCourses);
            return;
        }

        // Filter courses by title
        const results = savedCourses.filter((course) =>
            course.course_title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredCourses(results);
    }, [searchTerm, savedCourses]);

    return {
        loading,
        savedCourses: filteredCourses, // Use filtered courses for rendering
        handleChange,
        searchTerm,
    };
};

export default useSavedCourses;
