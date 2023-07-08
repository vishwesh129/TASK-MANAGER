import { Calendar } from 'antd';
import Navbar from '../../Pages/Navbar';

const Calender1 = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <div>
        <Navbar/>
        <Calendar onPanelChange={onPanelChange} />;
    </div>
  )
  
};
export default Calender1;