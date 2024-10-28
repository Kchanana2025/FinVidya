
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
