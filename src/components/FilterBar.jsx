import React, { useState } from "react";

const FilterBar = () => {
  const [isToggleOn, setToggle] = useState(false);

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow ">
      {/* 검색 버튼 */}
      <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center">
        {/* <span className="material-icons">filter_list</span> */}
        <span className="ml-2">기술 검색</span>
      </button>

      {/* 난이도 드롭다운 */}
      <select className="px-4 py-2 bg-white border rounded-lg shadow-sm focus:outline-none">
        <option value="all">난이도</option>
        <option value="easy">쉬움</option>
        <option value="medium">중간</option>
        <option value="hard">어려움</option>
      </select>

      {/* 가격 드롭다운 */}
      <select className="px-4 py-2 bg-white border rounded-lg shadow-sm focus:outline-none">
        <option value="all" >가격</option>
        <option value="free">무료</option>
        <option value="paid">유료</option>
      </select>

      {/* 모임/부트캠프 토글 */}
      <div className="flex items-center">
        <span className="mr-2">모임/부트캠프</span>
        <button
          onClick={() => setToggle(!isToggleOn)}
          className={`w-10 h-6 rounded-full ${
            isToggleOn ? "bg-blue-500" : "bg-gray-300"
          } flex items-center p-1`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
              isToggleOn ? "translate-x-4" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* 정렬 드롭다운 */}
      <select className="px-4 py-2 bg-white border rounded-lg shadow-sm focus:outline-none">
        <option value="recommended">추천순</option>
        <option value="newest">최신순</option>
        <option value="popular">인기순</option>
      </select>
    </div>
  );
};

export default FilterBar;
