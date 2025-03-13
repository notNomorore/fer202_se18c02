import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentCards from "./components/StudentCards";
const Demo = () => {
    return (
      <div>
        <Header />
        <img src="https://via.placeholder.com/800x300" alt="Students Group" className="w-100" />
        <StudentCards />
        <Footer />
      </div>
    );
  };
  
  export default Demo;