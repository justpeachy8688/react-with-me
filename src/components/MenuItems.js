import React from 'react'

function MenuItems({ menuItem }) {
    return (
        <div className="portfolios">
            {
                menuItem.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                            <ul className="hover-items">
                                <li>
                                    <a href={item.icon1}></a>
                                    <a href={item.icon2}></a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            <a href="https://github.com/justpeachy8688">{item.title}</a>
                        </h5>
                        <p>Placeholder Paragraph</p>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems
