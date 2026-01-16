
import {Outlet} from 'react-router-dom';
import GlobalStyled from '../styles/Global.styled.jsx';
import Navbar from '../components/navigation/Navbar/index.jsx';


export default function App() {

   return (
      <div>
         <Navbar />
         <Outlet />
         <GlobalStyled />
      </div>

   );
}