import { useState } from "react";
import ModalLogin from "./ModalLogin";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogined, setIsLogined] = useState(false);

  return (
    <header className="flex items-center justify-between">
      <div className="flex header_logo mr-8 pl-5">
        <img src="src/assets/Logo.png" className="h-12"></img>
        <img src="src/assets/EduBox.png" className="h-12"></img>
      </div>
      <div className="h-16 w-full px-5 flex flex-wrap items-center gap-5 font-semibold justify-between">
        <div className="header_menu flex gap-3 md:gap-5 font-semibold text-sm md:text-lg">
          <Link to="/courses" className="whitespace-nowrap">강의</Link>
          <Link to="/roadmaps" className="whitespace-nowrap">로드맵</Link>
          <Link to="/mentors" className="whitespace-nowrap">멘토링</Link>
          <Link to="/community" className="whitespace-nowrap">커뮤니티</Link>
        </div>
        <input
          className="h-12 w-full sm:w-3/5 border-1 border-slate-400 rounded-lg bg-slate-100 pl-5"
          placeholder="나의 진짜 성장을 도와줄 실무 강의를 찾아보세요"
        ></input>
        <div className="w-full sm:w-auto">
          {isLogined == false ? <IsNotLogined /> : <IsLogined />}
        </div>
      </div>
    </header>
  );
};

const IsNotLogined = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="isLogout">
      <button
        className="loginBtn h-12 bg-orange-500 text-white font-semibold px-5 py-2 rounded-lg whitespace-nowrap"
        onClick={() => setIsModalOpen(true)} // 모달 열기
      >
        로그인
      </button>
      {/* 모달 컴포넌트 */}
      {isModalOpen && <ModalLogin onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

const IsLogined = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="isLogout">
      <button
        className="loginBtn h-12 bg-orange-500 text-white font-semibold px-5 py-2 rounded-lg"
        onClick={() => setIsModalOpen(true)} // 모달 열기
      >
        로그아웃
      </button>
      {/* 모달 컴포넌트 */}
      {isModalOpen && <ModalLogin onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Header;
