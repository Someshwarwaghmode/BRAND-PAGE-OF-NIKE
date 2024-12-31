import './App.css';
import Navigation from './component/Navigation';
import HeroSection from './component/Hero';
import MyInformation from '../../project3/src/components/MyInformation';
const App = () => {
    return(
    <div>
      <MyInformation/>
      <Navigation/>
      <HeroSection/>
    </div>
    );
  };
 
  export default App;
