import { DashboardLayout } from "@/components/dashboard-layout";
import React from "react";
import AllContactsData from "./_components/AllContactData";

const ContactsPage = () => {
  return (
    <div>
      <DashboardLayout title="Contacts">
        <AllContactsData />
      </DashboardLayout>
    </div>
  );
};

export default ContactsPage;