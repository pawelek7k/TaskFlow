import { DashboardContainer } from "./components/DashboardContainer";
import { UserProfileContainer } from "./components/UserProfile";

const Dashboard = () => {
  return (
    <div>
      <main>
        <UserProfileContainer />
        <DashboardContainer />
      </main>
    </div>
  );
};

export default Dashboard;
