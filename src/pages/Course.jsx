import CourseList from "../components/CourseList"
import FilterBar from "../components/FilterBar"
import Header from "../components/Header"

const Course = () => {
  return(
    <div>
      <Header />
      <h1>강의 페이지 입니다</h1>
      <FilterBar/>
      <CourseList/>
    </div>
    )
}

export default Course