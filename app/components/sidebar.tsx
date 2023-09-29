import React from "react";
import {
  BarChart,
  BellRing,
  Users,
  MessageSquare,
  MapPin,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  return (
    <>
      <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8  max-[1440px]:hidden">
        <div className="mt-8 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                Navigate
              </label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../form"
              >
                <BarChart className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Registration</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../dashboard"
              >
                <Users className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">बाँसडीह मंडल</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../dashboard"
              >
                <Users className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">
                  बेरुआरबारी मंडल
                </span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../dashboard"
              >
                <Users className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">मनियर मंडल</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../dashboard"
              >
                <Users className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">सहतवार मंडल</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../dashboard"
              >
                <Users className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">रेवती मंडल</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../dashboard"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">
                  क्षेत्र (Sector)
                </span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">ग्राम मास्टर</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">बूथ मास्टर</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">मंडल मास्टर</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">सेक्टर मास्टर</span>
              </Link>
            </div>
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                content
              </label>

              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <MessageSquare className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Send SMS</span>
              </Link>
            </div>
          </nav>
        </div>
      </aside>

      {/* mobile */}
    </>
  );
}
