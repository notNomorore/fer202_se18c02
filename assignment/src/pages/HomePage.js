import Contents from "../components/ContentsLog";
import Header from "../components/Header";
import NavigationLog from "../components/NavigationLog";
import Footer from "../components/Footer";  

function HomePage() {
  return (
    <div>
        <NavigationLog/>   
        <Header/>
        <Contents/>
        <Footer/>
    </div>
  );
}
export default HomePage;    