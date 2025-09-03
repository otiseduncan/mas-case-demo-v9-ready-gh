import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CLASSES } from "../theme";

const AdminTabs: React.FC = () => {
  const { pathname } = useLocation();
  const tab = (to: string, label: string, red?: boolean) => (
    <Link
      to={to}
      className={
        red
          ? `${CLASSES.btnPrimary}`
          : `${CLASSES.btn} ${pathname === to ? 'border-red-600' : ''}`
      }
    >
      {label}
    </Link>
  );
  return (
    <div className="flex items-center gap-2 flex-wrap mb-4">
  {tab('/admin', 'Admin Dashboard', true)}
  {tab('/admin/health', 'System Health', true)}
    </div>
  );
};
export default AdminTabs;
