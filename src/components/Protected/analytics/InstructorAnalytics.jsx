/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styles from './analytics.module.scss';
import { toast } from 'react-toastify';
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading';
import { useSelector } from 'react-redux';

const Analytics = () => {
    const Instructor = useSelector((state) => state.Instructor);
    const currentUser = useSelector((state) => state.set_up_user);

    const [isAdmin, setIsAdmin] = useState(false);
    const [selectedOption, setSelectedOption] = useState('category'); // Default selected option
    const [loading, setLoading] = useState(false);
    const [imageSrc, setImageSrc] = useState(null); // Store the image URL or response data

    // Determine if the current user is an Admin
    useEffect(() => {
        if (
            currentUser?.email === "faizzafar44@gmail.com" ||
            currentUser?.email === "awaisamjad.official@gmail.com" ||
            currentUser?.email === "rafaqatsufyan1@gmail.com"
        ) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [currentUser]);

    // API Endpoints for Admin and Instructor
    const instructorApiEndpoints = {
        category: `instructor_courses_rating_by_category/${Instructor?._id}`,
        'top-rated': `instructor_top_rated_courses/rating-graph/${Instructor?._id}`,
        'all-courses': `instructor_all_courses_rating/rating-graph/${Instructor?._id}`,
        'low-rated': `instructor_all_courses_rating/lowest-courses-ratings/${Instructor?._id}`,
    };

    const adminApiEndpoints = {
        category: 'api/admin/most-wished-courses',
        'enroll-completion': 'api/admin/course/enrollment-completion/',
        'top-rated': 'api/admin/most_completed_courses',
        'all-courses': 'api/admin/most_enrolled_courses',
        'low-rated': 'api/admin/course/average_course_ratings',
        'wish-list': 'top-performing-instructors',
    };

    // Fetch data based on user role and selected option
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Start loading
            try {
                const apiEndpoints = isAdmin ? adminApiEndpoints : instructorApiEndpoints;
                const response = await fetch(`https://eduwiseapp.awaisamjad.engineer/${apiEndpoints[selectedOption]}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.blob(); // Assuming API returns an image blob
                const imageUrl = URL.createObjectURL(data); // Convert Blob to URL
                setImageSrc(imageUrl); // Set the image source
            } catch (error) {
                console.error(error);
                toast.error('Error fetching data!');
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchData();
    }, [selectedOption, isAdmin]);

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value); // Update the selected option
    };

    return (
        <>
            <section className={`${styles.analytics}`}>
                <div className="text-end">
                    <select onChange={handleSelectChange} value={selectedOption}>
                        {isAdmin ? (
                            <>
                                <option value="category">Most Wished Courses</option>
                                <option value="enroll-completion">Completed VS Enrolled</option>
                                <option value="top-rated">Most Completed Courses</option>
                                <option value="all-courses">Most Enrolled Courses</option>
                                <option value="low-rated">Average Course Rating</option>
                                <option value="wish-list">Top Performing Instructors</option>
                            </>
                        ) : (
                            <>
                                <option value="category">Category Wise Rating</option>
                                <option value="top-rated">Top Rated Courses</option>
                                <option value="all-courses">All Courses</option>
                                <option value="low-rated">Low Rated Courses</option>
                            </>
                        )}
                    </select>
                </div>

                {loading ? (
                    <InnerPageLoading />
                ) : (
                    <div className="mt-4 text-center">
                        {imageSrc ? (
                            <img src={imageSrc} alt="Eduwise Analytics" />
                        ) : (
                            <p>No data available</p>
                        )}
                    </div>
                )}
            </section>
        </>
    );
};

export default Analytics;
