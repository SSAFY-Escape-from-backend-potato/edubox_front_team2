const CourseCard = ({ image, title, instructor, description, level, price, originalPrice, discount, isFree }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 mb-2">{instructor}</p>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center mb-2">
        <span className="text-blue-500 font-bold">{level}</span>
        {isFree ? (
          <span className="text-green-500 font-bold">Free</span>
        ) : (
          <span className="text-red-500 font-bold">{`₩${price}`}</span>
        )}
      </div>
      {!isFree && originalPrice && (
        <p className="text-gray-400 line-through">₩{originalPrice}</p>
      )}
    </div>
  </div>
);

const CourseList = () => {
  const courses = [
    {
      image: "src/assets/액셀강의.png", // Replace with the real image URL
      title: "엑셀 활용하기 : EXCEL 중급",
      instructor: "인프런",
      description: "엑셀 기초를 다룰 수 있는 분들에게 중급 이상의 수준으로...",
      level: "중급 이상",
      price: 0,
      originalPrice: 33000,
      discount: 100,
      isFree: true,
    },
    {
      image: "src/assets/유니티강의.png", // Replace with the real image URL
      title: "유니티 시스템 프로그래밍 Pt.2",
      instructor: "BurningCarrot",
      description: "상용 게임 구현을 위한 핵심 시스템 올인원...",
      level: "New",
      price: 154000,
      originalPrice: 220000,
      discount: 30,
      isFree: false,
    },
    {
      image: "src/assets/파이썬강의.png", // Replace with the real image URL
      title: "프로그래밍 시작하기 : 도전! 45가지 파이썬 기초 문법 실습",
      instructor: "인프런",
      description: "파이썬 기초 문법을 익히고 문제를 해결해보세요...",
      level: "5일만 100%",
      price: 0,
      originalPrice: 33000,
      discount: 100,
      isFree: true,
    },
    {
      image: "src/assets/안드로이드강의.png", // Replace with the real image URL
      title: "[포트폴리오] 안드로이드 앱 만들기",
      instructor: "개복치개발자",
      description: "안드로이드 앱 개발을 위한 실습 프로젝트...",
      level: "New",
      price: 46200,
      originalPrice: 66000,
      discount: 30,
      isFree: false,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Course List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
