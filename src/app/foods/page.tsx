import React from "react";
import CatIcon from "../../../public/caticon.png";
import ParentLayout from "../../../components/ParentLayout";
import HomeFree from "../../../public/homefree.png";

function Categories() {
  return (
    <div>
      <ParentLayout icon1={CatIcon} icon={HomeFree}>
        <div>Categories</div>
      </ParentLayout>
    </div>
  );
}

export default Categories;
