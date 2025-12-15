"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  const handleFilterClick = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };
  return (
    <>
      <div className="border border-primary-800 flex">
        <Button
          filter="all"
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        >
          All Cabins
        </Button>
        <Button
          filter="small"
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        >
          1&mdash;3 guests
        </Button>
        <Button
          filter="medium"
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        >
          4&mdash;7 guests
        </Button>
        <Button
          filter="large"
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        >
          8&mdash;12 guests
        </Button>
      </div>
    </>
  );
}

function Button({ filter, activeFilter, handleFilterClick, children }) {
  return (
    <button
      onClick={() => handleFilterClick(filter)}
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
    >
      {children}
    </button>
  );
}
