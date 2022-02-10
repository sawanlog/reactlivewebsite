import React, { useState, useEffect } from "react";
import "./style.css";
import Menu from "./menuApi.js";
//import MenuCard from "./MenuCard";
import MenuCard2 from "./MenuCard2";
import Navbar from "./Navbar";

const uniqueList = [
  //()spread operator
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const [menuList2, setMenuList2] = useState([]);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
    handlefetchdata(category);
  };

  useEffect(() => {
    handlefetchdata("breakfast");
  }, []);

  const handlefetchdata = async (params) => {
    try {
      const response = await fetch(
        `http://192.168.2.193/jsonapi/taxonomy_term/${params}`,
        // `https://api.spacexdata.com/v3/capsules`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      console.log("breakfast list", data?.data);
      if (data) {
        setMenuList2(data?.data ? data?.data : []);
      } else {
        setMenuList2([]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      {/* <MenuCard menuData={menuData} /> */}
      <MenuCard2 menuData={menuList2} />
    </>
  );
};

export default Resturant;
