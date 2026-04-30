"use client";

//Next
import { useState } from "react";
import Image from "next/image";

//Components
import FilterComponent from "./FilterComponent";

//Data
import jobs from "@/data/data";

const Main = () => {
  const [filterTag, setFilterTag] = useState<string[]>([]);

  const filteredJobs =
    filterTag.length === 0
      ? jobs
      : jobs.filter((item) =>
          filterTag.every((tag) => item.tags.includes(tag)),
        );

  return (
    <main className="mx-4 md:mx-[10%] lg:mx-[20%]">
      <FilterComponent filterTag={filterTag} setFilterTag={setFilterTag} />
      <div className="my-10 md:my-15 flex flex-col gap-6 md:gap-10">
        {filteredJobs.map((item) => (
          <div
            key={item.company}
            className="bg-white rounded-xl h-auto md:h-36 py-6 md:py-0"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-4 md:px-[4%] h-full gap-6 md:gap-0">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <Image
                  src={`/img/${item.image}.svg`}
                  alt=""
                  width={1000}
                  height={1000}
                  className="rounded-full h-16 w-16 md:h-20 md:w-20"
                />
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap gap-2 items-center">
                    <p className="text-[#578683] font-black">{item.company}</p>
                    {item.isNew && (
                      <p className="text-white font-black bg-[#5DA1A0] py-1 px-3 md:px-4 rounded-full text-xs md:text-sm">
                        NEW!
                      </p>
                    )}
                    {item.isFeatured && (
                      <p className="text-white font-black bg-[#2A3A37] py-1 px-3 md:px-4 rounded-full text-xs md:text-sm">
                        FEATURED
                      </p>
                    )}
                  </div>
                  <p className="font-black text-sm md:text-base">
                    {item.position}
                  </p>
                  <div className="flex flex-wrap gap-2 opacity-70 text-xs md:text-sm">
                    <p>{item.postedAt}</p> /<p>{item.contract}</p> /
                    <p>{item.location}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 md:gap-5 md:justify-end">
                {item.tags.map((tag) => (
                  <button
                    key={tag}
                    className={`${
                      filterTag.includes(tag)
                        ? "text-white bg-[#5FA3A4]"
                        : "text-[#559491] bg-[#F0F4F7]"
                    } font-semibold p-2 rounded-xl cursor-pointer text-xs md:text-sm`}
                    onClick={() =>
                      !filterTag.includes(tag) &&
                      setFilterTag((prev) => [...prev, tag])
                    }
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
