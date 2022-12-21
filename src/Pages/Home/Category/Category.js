import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Category.css'
import SingleCategory from './SingleCategory/SingleCategory';
const Category = () => {
    const categories = useLoaderData()
    return (
        <div>

            <section className="category">
                <h1 className='text-3xl font-bold'> category</h1>
                <div className="row">
                    {
                        categories.map(category => <SingleCategory
                            key={categories.ct_id}
                            categories={category}></SingleCategory>)
                    }
                    {/* <div className="category-col">
                        <img src="https://i.ibb.co/q9BdNLX/images.png" alt="" />
                        <div className="layer">
                            <h3>london</h3>
                            <button className='btn btn-primary mt-[250px]'>Shop now</button>
                        </div>
                    </div>
                    <div className="category-col">
                        <img src="https://i.ibb.co/16Nd32P/2022-09-01-T144829-Z-181126004-RC2-D8-W9-X8-RKS-RTRMADP-3-SONY-GROUP-ZEE-ENTERTAINMENT-INDIA-ANTITRU.jpg" alt="" />
                        <div className="layer">
                            <h3>New York</h3>
                        </div>
                    </div>
                    <div className="category-col">
                        <img src="https://i.ibb.co/kHmn98N/unnamed.png" alt="" />
                        <div className="layer">
                            <h3>Washington</h3>
                        </div>
                    </div> */}
                </div>

            </section>
        </div>
    );
};

export default Category;