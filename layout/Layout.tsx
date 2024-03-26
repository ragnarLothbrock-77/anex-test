import { Dashboard } from "../components/Dashboard/Dashboard";
import { ReactNode } from "react";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: ReactNode }) {

  return (
    <div className={[inter.className, 'w-full min-h-screen'].join(' ')}>
      <div className="flex p-8">
        <Dashboard />
        <main className="flex-grow py-7 pl-7">{children}</main>
      </div>
    </div>
  )
}