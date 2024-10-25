import { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"


const useCourses = () => {

    const [loading, setLoading] = useState(true)

    const [input, setInput] = useState()

    const location = useLocation()

    const searchInput = location?.state?.input || ""



    const courses = [
        {
            title: "React for Beginners",
            description: "A comprehensive course to learn the basics of React.",
            instructor: "John Doe",
            price: 49.99,
            image: "course_thumbail_1.png",
            level: "Beginner",
            isFeatured: false,
            discount: 0,
            isFree: false,
            catagory: 'Trending'
        },
        {
            title: "Advanced Node.js",
            description: "Deep dive into Node.js with advanced techniques and features.",
            instructor: "Jane Smith",
            price: 79.99,
            image: "course_thumbail_2.png",
            level: "Advanced",
            isFeatured: true,
            discount: 0,
            isFree: false,
            catagory: 'Popularity'
        },
        {
            title: "Introduction to Python",
            description: "Learn the basics of Python programming for beginners.",
            instructor: "Alice Johnson",
            price: 0,
            image: "course_thumbail_3.png",
            level: "Beginner",
            isFeatured: false,
            discount: 0,
            isFree: false,
            catagory: 'Art & Design'
        },
        {
            title: "Full-Stack JavaScript",
            description: "Become a full-stack developer by mastering JavaScript.",
            instructor: "Robert King",
            price: 99.99,
            image: "course_thumbail_4.png",
            level: "All Levels",
            isFeatured: true,
            discount: 0,
            isFree: false,
            catagory: 'Trending'
        },
        {
            title: "Data Structures & Algorithms",
            description: "Master data structures and algorithms with JavaScript.",
            instructor: "Emily Davis",
            price: 69.99,
            image: "course_thumbail_5.png",
            level: "Intermediate",
            isFeatured: false,
            discount: 0,
            isFree: true,
            catagory: 'Featured'
        },
        {
            title: "UI/UX Design Fundamentals",
            description: "Learn the essentials of UI/UX design for web and mobile.",
            instructor: "Michael Brown",
            price: 59.99,
            image: "course_thumbail_6.png",
            level: "Beginner",
            isFeatured: false,
            discount: 0,
            isFree: false,
            catagory: 'Popularity'
        },
        {
            title: "Mastering CSS Flexbox",
            description: "Create responsive layouts with CSS Flexbox.",
            instructor: "Sarah Lee",
            price: 29.99,
            image: "course_thumbail_7.png",
            level: "Intermediate",
            isFeatured: true,
            discount: 0,
            isFree: true,
            catagory: 'Featured'
        },
        {
            title: "Complete Guide to Web Development",
            description: "Learn to build full-stack web applications from scratch.",
            instructor: "James Wilson",
            price: 149.99,
            image: "course_thumbail_8.png",
            level: "All Levels",
            isFeatured: false,
            discount: 40,
            isFree: false,
            catagory: 'Art & Design'
        },
        {
            title: "React for Beginners",
            description: "A comprehensive course to learn the basics of React.",
            instructor: "John Doe",
            price: 49.99,
            image: "course_thumbail_1.png",
            level: "Beginner",
            isFeatured: false,
            discount: 0,
            isFree: false,
            catagory: 'Trending'
        },
        {
            title: "Advanced Node.js",
            description: "Deep dive into Node.js with advanced techniques and features.",
            instructor: "Jane Smith",
            price: 79.99,
            image: "course_thumbail_2.png",
            level: "Advanced",
            isFeatured: true,
            discount: 0,
            isFree: false,
            catagory: 'Popularity'
        },
        {
            title: "Introduction to Python",
            description: "Learn the basics of Python programming for beginners.",
            instructor: "Alice Johnson",
            price: 0,
            image: "course_thumbail_3.png",
            level: "Beginner",
            isFeatured: false,
            discount: 0,
            isFree: false,
            catagory: 'Art & Design'
        },
        {
            title: "Full-Stack JavaScript",
            description: "Become a full-stack developer by mastering JavaScript.",
            instructor: "Robert King",
            price: 99.99,
            image: "course_thumbail_4.png",
            level: "All Levels",
            isFeatured: true,
            discount: 0,
            isFree: false,
            catagory: 'Trending'
        },
        {
            title: "Data Structures & Algorithms",
            description: "Master data structures and algorithms with JavaScript.",
            instructor: "Emily Davis",
            price: 69.99,
            image: "course_thumbail_5.png",
            level: "Intermediate",
            isFeatured: false,
            discount: 0,
            isFree: true,
            catagory: 'Featured'
        },
        {
            title: "UI/UX Design Fundamentals",
            description: "Learn the essentials of UI/UX design for web and mobile.",
            instructor: "Michael Brown",
            price: 59.99,
            image: "course_thumbail_6.png",
            level: "Beginner",
            isFeatured: false,
            discount: 0,
            isFree: false,
            catagory: 'Popularity'
        },
        {
            title: "Mastering CSS Flexbox",
            description: "Create responsive layouts with CSS Flexbox.",
            instructor: "Sarah Lee",
            price: 29.99,
            image: "course_thumbail_7.png",
            level: "Intermediate",
            isFeatured: true,
            discount: 0,
            isFree: true,
            catagory: 'Featured'
        },
        {
            title: "Complete Guide to Web Development",
            description: "Learn to build full-stack web applications from scratch.",
            instructor: "James Wilson",
            price: 149.99,
            image: "course_thumbail_8.png",
            level: "All Levels",
            isFeatured: false,
            discount: 40,
            isFree: false,
            catagory: 'Art & Design'
        },
        {
            title: "React for Beginners",
            description: "A comprehensive course to learn the basics of React.",
            instructor: "John Doe",
            price: 49.99,
            image: "course_thumbail_1.png",
            level: "Beginner",
            isFeatured: false,
            discount: 0,
            isFree: false,
            catagory: 'Trending'
        },
        {
            title: "Advanced Node.js",
            description: "Deep dive into Node.js with advanced techniques and features.",
            instructor: "Jane Smith",
            price: 79.99,
            image: "course_thumbail_2.png",
            level: "Advanced",
            isFeatured: true,
            discount: 0,
            isFree: false,
            catagory: 'Popularity'
        },
        {
            title: "Introduction to Python",
            description: "Learn the basics of Python programming for beginners.",
            instructor: "Alice Johnson",
            price: 0,
            image: "course_thumbail_3.png",
            level: "Beginner",
            isFeatured: false,
            discount: 0,
            isFree: false,
            catagory: 'Art & Design'
        },
        {
            title: "Full-Stack JavaScript",
            description: "Become a full-stack developer by mastering JavaScript.",
            instructor: "Robert King",
            price: 99.99,
            image: "course_thumbail_4.png",
            level: "All Levels",
            isFeatured: true,
            discount: 0,
            isFree: false,
            catagory: 'Trending'
        },
        {
            title: "Data Structures & Algorithms",
            description: "Master data structures and algorithms with JavaScript.",
            instructor: "Emily Davis",
            price: 69.99,
            image: "course_thumbail_5.png",
            level: "Intermediate",
            isFeatured: false,
            discount: 0,
            isFree: true,
            catagory: 'Featured'
        },
        {
            title: "UI/UX Design Fundamentals",
            description: "Learn the essentials of UI/UX design for web and mobile.",
            instructor: "Michael Brown",
            price: 59.99,
            image: "course_thumbail_6.png",
            level: "Beginner",
            isFeatured: false,
            discount: 0,
            isFree: false,
            catagory: 'Popularity'
        },
        {
            title: "Mastering CSS Flexbox",
            description: "Create responsive layouts with CSS Flexbox.",
            instructor: "Sarah Lee",
            price: 29.99,
            image: "course_thumbail_7.png",
            level: "Intermediate",
            isFeatured: true,
            discount: 0,
            isFree: true,
            catagory: 'Featured'
        },
        {
            title: "Complete Guide to Web Development",
            description: "Learn to build full-stack web applications from scratch.",
            instructor: "James Wilson",
            price: 149.99,
            image: "course_thumbail_8.png",
            level: "All Levels",
            isFeatured: false,
            discount: 40,
            isFree: false,
            catagory: 'Art & Design'
        },

    ];

    const [filteredCourses, setFilteredCourses] = useState(courses)

    const filterCourses = (value) => {
        if (value === '') {
            setFilteredCourses(courses);
            return;
        }

        const newFilteredCourses = courses.filter((ele) => 
            ele.description.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredCourses(newFilteredCourses);
    };

    useEffect(()=>{

        setInput(searchInput)
        filterCourses(searchInput)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchInput])



    const handelInput = (e) => {
        const { value } = e.target

        setInput(value)

        filterCourses(value)
      
    }



    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, [])


    return {
        loading,
        courses,
        handelInput,
        // input,
        filteredCourses,
        input,
    }

}

export default useCourses