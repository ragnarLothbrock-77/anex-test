import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";

type TagType = 'tel' | 'mail' | 'info';

interface TagProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: TagType;
  extra?: string;
}

export const Tag = ({ children, variant = 'info', extra, ...props }: TagProps) => {
  switch (variant) {
    case 'info':
      return <div
        className="flex items-center justify-center rounded-md bg-gray-600 w-20 h-14 cursor-pointer"
        {...props}
      >
        {children}
      </div>
    case 'mail':
      return <div
        className="rounded-md bg-sky-700 w-20 h-14"
        {...props}
      >
        <Link
          className="flex items-center justify-center w-full h-full"
          href={`mailto:${extra}`}
        >{children}
        </Link>
      </div>
    case 'tel':
      return <div
        className="rounded-md bg-green-600 w-20 h-14"
        {...props}
      >
        <Link
          className="flex items-center justify-center w-full h-full"
          href={`tel:+${extra}`}
        >{children}
        </Link>
      </div>
    default:
      break;
  }


}