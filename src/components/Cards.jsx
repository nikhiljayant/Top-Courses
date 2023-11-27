import React, { useState } from 'react'
import Card from "./Card"

const Cards = ({ courses, cateogary }) => {

    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (cateogary === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        } else {
            return courses[cateogary];
        }
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map((course) => (
                    <Card
                        key={course.id}
                        course={course}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses} 
                    />
                ))
            }
        </div>
    )
}

export default Cards