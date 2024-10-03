import { useEffect, useState } from "react"
import { toast } from "react-toastify";



const useLandingPage = () => {

    let buttons = ['All', 'Trending', 'Popularity', 'Featured', 'Art & Design']

    buttons = buttons.slice(0, 5)

    const [loading, setLoading] = useState(false)

    const [pageLoading, setPageLoading] = useState(true)

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

    ];


    const [filteredCourses, setFilteredCourses] = useState(courses);


    const [active, setActive] = useState({
        btn1: true,
        btn2: false,
        btn3: false,
        btn4: false,
        btn5: false,
    });


    const categories = [
        {
          title: 'Art & Design',
          img:'./images/category_1.png'
        },
        {
          title: 'Development',
          img:'./images/category_2.png'
        },
        {
            title: 'Life style',
            img:'./images/category_3.png'
          },
        {
          title: 'Personal Development',
          img:'./images/category_4.png'
        },
        {
          title: 'Business',
          img:'./images/category_5.png'
        },
        {
          title: 'Finance',
          img:'./images/category_6.png'
        },
        {
          title: 'Marketing',
          img:'./images/category_7.png'
        },
        {
          title: 'Photography',
          img:'./images/category_8.png'
        },
        {
          title: 'Data Science',
          img:'./images/category_9.png'
        },
        {
          title: 'Health & Fitness',
          img:'./images/category_10.png'
        },
        {
          title: 'Music',
          img:'./images/category_11.png'
        },
        {
          title: 'Teaching & Academics',
          img:'./images/category_12.png'
        },
    ]


    useEffect(() => {

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setPageLoading(false)
        }, 2000)

    }, [])

    const filterCourses = (btn) => {
        if (btn == 'All') {
            setFilteredCourses(courses)
        } else {
            const filtered = courses.filter((ele) => ele.catagory === btn);
            setFilteredCourses(filtered);
        }
    }

    const switchTab = (btnId, btn) => {

        setLoading(true)
        setActive({
            btn1: false,
            btn2: false,
            btn3: false,
            btn4: false,
            btn5: false,
            [`btn${btnId}`]: true
        })

        filterCourses(btn)

        setTimeout(() => {
            setLoading(false)
        }, 2000)


    }


    useEffect(() => {
        if (!loading && filteredCourses.length === 0) {
            toast.error("No Data Found!");
        }
    }, [loading, filteredCourses]);


    return { switchTab, active, buttons, loading, filteredCourses, pageLoading, categories }

}

export default useLandingPage