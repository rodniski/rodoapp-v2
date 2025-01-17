"use client";
import { useBreadcrumbs } from "lib";
import React, { useEffect } from "react";

const Page = () => {
  const { setBreadcrumbs } = useBreadcrumbs();

  useEffect(() => {
    setBreadcrumbs([
      { label: "RodoApp", href: "/" },
      { label: "Central", href: "/central" },
      { label: "Histórico de Saídas" },
    ]);
  }, [setBreadcrumbs]);
  return (
    <div className="h-full w-full flex justify-center items-center">
      Central Histórico de Saídas
    </div>
  );
};

export default Page;
