"use client";
import { TabConfigs } from "./utilities/config";
import "./styles/style.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UseReducerExample from "./components/UseReducerExample";
import Link from "next/link";

function Home() {
  const [activeTab, setActiveTab] = useState(TabConfigs[0]);
  const ActiveTab = activeTab.component;
  const handleActiveTab = (index: number) => {
    setActiveTab(TabConfigs[index]);
  };

  const handleSubmit = () => {
    if (userInfo.name.length < 2) {
      alert("name should be more than 2 letter");
    }
    if (!userInfo.email.includes("@")) {
      alert("must include @");
    }
  };

  const [userInfo, setUserInfo] = useState({
    name: "User",
    email: "email@mail.com",
    theme: "light",
    interest: ["gaming", "coding"],
  });
  return (
    <div style={{ background: "white" }}>
      <div className="tab-headings">
        {TabConfigs.map((tab, index) => {
          return (
            <div onClick={() => handleActiveTab(index)} className="tab-container" key={index}>
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className="tab-body">
        <ActiveTab data={userInfo} setData={setUserInfo} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
export default function App() {
  return (
    <div>
      HomePage
      <Link href={"/foldermanager"}>Go to folder manager</Link>
      {/* <UseReducerExample /> */}
    </div>
  );
}
