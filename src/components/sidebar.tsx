// src/components/sidebar.tsx
import {
  CalendarIcon,
  DashboardIcon,
  FileTextIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
      <div className="space-y-3">
        <div className="flex items-center">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <Link
                href="/"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <HomeIcon className="w-6 h-6 text-black" />
                <span>Home</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                href="/products"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                {/*  */}
                <DashboardIcon className="w-6 h-6 text-black" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                href="/medical-record"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <FileTextIcon className="w-6 h-6 text-black" />
                <span>M Record</span>
              </Link>
            </li>

            <li className="rounded-sm">
              <Link
                href="/appointment"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <CalendarIcon className="w-6 h-6 text-black" />
                <span>Appointment</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                href="/logout"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
