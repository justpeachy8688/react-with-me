import React from 'react'
import Categories from '../components/Categories';
import Title from '../components/Title/Title';
import MenuItems from "../components/MenuItems";
import portfolios from "../components/Portfolio/portfolios";
import { useState } from "react"

function Portfolio() {
    const [categories, setCategories] = useState(null);
    const [menuItems, setMenuItems] = useState(portfolios);
    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolio'} span={'portfolios'} />
            </div>
            <div className="portfolios-data">
                <Categories />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default Portfolio;
