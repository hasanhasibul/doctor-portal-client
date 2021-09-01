import React from 'react';
import Ellipse1 from '../../../images/Ellipse 1.png';
import Ellipse2 from '../../../images/Ellipse 2.png';
import Ellipse3 from '../../../images/Ellipse 3.png';
import Blog from './Blog/Blog';
const Blogs = () => {

    const blogData = [
        {
            name:'Tushar Ahmed',
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing' ,
            time : '3 September 2021',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia blanditiis doloribus nihil cupiditate, asperiores sit quos repellat velit! Inventore.',
            img: Ellipse1
        },
        {
            name:'Hasibul Hasan',
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing' ,
            time : '5 September 2021',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia blanditiis doloribus nihil cupiditate, asperiores sit quos repellat velit! Inventore.',
            img: Ellipse2
        },
        {
            name:'Yasin Sarkar',
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing' ,
            time : '1 September 2021',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia blanditiis doloribus nihil cupiditate, asperiores sit quos repellat velit! Inventore.',
            img: Ellipse3
        }
    ]
    return (
        <div className="container  fw-bolder mt-4 mb-4 p-4 " >
            <h6 className="text-primary text-center p-4" >OUR BLOGS</h6>
            <h3 className="text-style text-center pb-4 " >From Ours Blogs News</h3>
                <div className="row mt-4">
                     {
                         blogData.map((data)=> <Blog data={data} ></Blog>)
                     }
                </div>
        </div>
    );
};

export default Blogs;