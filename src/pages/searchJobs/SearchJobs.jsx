import React from "react";
import Chips from "../../components/chips/Chips";
import Dropdown from "../../components/Dropdown/Dropdown";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Search from "../../components/Search/Search";
import ToggleSwitch from "../../components/ToogleSwitch/ToggleSwitch";
import course1 from "../../assets/images/course1.png"
import course2 from "../../assets/images/course2.png"


const SearchJobs = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-5">
      <span className="mt-3 font-semibold text-lg">
        What types of jobs interest you?
      </span>
      <div className="flex justify-center items-center mt-5">
        <span className="mr-10">Full Time</span>
        <ToggleSwitch label="Notifications" />
        <span className="ml-10">Freelance</span>
      </div>

      <div className="flex w-[60%] flex-wrap h-auto justify-center mt-10">
        <Chips name="Architecture" />
        <Chips name="Commercial Architecture" />
        <Chips name="Computational Design" />
        <Chips name="Green Architecture" />
        <Chips name="Interior Architecture" />
        <Chips name="Interior Design" />
        <Chips name="Landscape Architecture" />
        <Chips name="Sustainable Architecture" />
        <Chips name="Urban Design" />
        <Chips name="Urban Planning" />
        <Chips name="Vernacular Architecture" />
        <Chips name="Parametic Architecture" />
        <Chips name="Residential Architecture" />
      </div>

      <Search />
      <div className="w-[60%] flex justify-between mt-5">
        <div className="flex">
          <Dropdown title="On-Site" />
          <Dropdown title="Long-Term" />
        </div>
        <div className="border-2 border-slate-500 flex justify-center items-center px-5 rounded-full cursor-pointer">
          <span className="text-slate-500">Clear All</span>
        </div>
      </div>
      <div className="flex w-[60%] mt-5 ml-7">
        <span className="font-medium"><span className="font-semibold">241</span> results</span>
      </div>
      <div className="w-[60%]">
        <ProjectCard image={course1} tags={['Freelance', 'On-Site', 'Long-Term']} name="Architectural Designer" />
        <ProjectCard image={course2} tags={['Freelance', 'On-Site', 'Long-Term']} name="Project Architect" />
      </div>

    </div>
  );
};

export default SearchJobs;
