import React from 'react';
import { Calendar } from 'react-calendar';

const Blog = ({ data }) => {
    return (
        <div className="col-md-4" >
            <div className="m-1 border ">
                <div className="row">
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-4 p-4">
                        <img className="img-fluid" src={data.img} alt="" />
                    </div>
                    <div className="col-md-7 p-4 text-left ">
                        <h5 className="text" >{data.name}</h5>
                        <p className="text-primary"> {data.time} </p>
                    </div>
                </div>

                <div className="review-content">
                    <div className="p-4 " >
                        <h2 className=" h4 lh-base"> {data.title} </h2>
                        <br />
                        <p className="lh-base text-secondary" >{data.comment}</p>
                        <button className="btn btn-primary" >Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;