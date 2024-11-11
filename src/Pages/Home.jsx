import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";

function Home({ sidebar }) {
  const [category, setCategory] = useState(0);
  return (
    <div className="">
      <div className="flex items-start">
        <Sidebar
          sidebar={sidebar}
          category={category}
          setCategory={setCategory}
        />
        <Feed sidebar={sidebar} category={category} />
      </div>
    </div>
  );
}

export default Home;
