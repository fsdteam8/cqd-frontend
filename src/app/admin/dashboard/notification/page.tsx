import { DashboardLayout } from "@/components/dashboard-layout";
import Notification from "@/components/Notification";

const page = () => {
  return (
    <DashboardLayout title="Notifications">
      <Notification />
    </DashboardLayout>
  );
};

export default page;
