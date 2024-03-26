import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

interface ControlProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  bg?: 'bg-red-500' | 'bg-green-600';
  isAbsolute?: boolean;
}

export const Controller = ({ children, bg, isAbsolute, ...props }: PropsWithChildren<ControlProps>) => {
  return (
    <div
      className={`${bg} ${isAbsolute && 'absolute top-10 right-10'} w-20 h-20 rounded-full  flex justify-center items-center cursor-pointer`}
      {...props}
    >
      {children}
    </div>
  )
}