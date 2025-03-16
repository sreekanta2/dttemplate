"use client";
import { cn, getDynamicPath, isLocationMatch } from "@/lib/utils";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import Link from "next/link";
function LockLink({
  href,
  children,
  subItem,
}: {
  href: string;
  children: React.ReactNode;
  subItem: any;
}) {
  if (subItem.badge) {
    return (
      <span className="text-sm flex space-x-3 items-center transition-all duration-150 opacity-50  cursor-not-allowed">
        <span
          className={` h-2 w-2 rounded-full border border-default-600  inline-block flex-none`}
        ></span>
        <div className="flex-1 truncate  flex  text-default-600">
          <div className="flex-1  truncate">{subItem.title}</div>
          <Badge className="leading-0 capitalize flex-none px-1 text-xs font-normal">
            {subItem.badge}
          </Badge>
        </div>
      </span>
    );
  } else {
    return <Link href={href}>{children}</Link>;
  }
}

const SubMenuItem = ({ subItem }: { subItem: any }) => {
  const pathname = usePathname();
  const locationName = getDynamicPath(pathname);
  return (
    <LockLink href={subItem.href} subItem={subItem}>
      <div
        className={cn(
          "text-sm capitalize  font-normal flex gap-3 items-center transition-all duration-150 rounded dark:hover:text-primary  ",
          {
            " text-primary   ": isLocationMatch(subItem.href, locationName),
            "  text-default-600 dark:text-default-700  ": !isLocationMatch(
              subItem.href,
              locationName
            ),
          }
        )}
      >
        <span className="flex-1 truncate">{subItem.title}</span>
      </div>
    </LockLink>
  );
};

export default SubMenuItem;
