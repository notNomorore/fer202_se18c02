import Contents from "../components/Contents";
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