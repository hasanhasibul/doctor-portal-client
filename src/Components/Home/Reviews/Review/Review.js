import React from 'react';

const Review = ({ data }) => {
    return (
        <div className="col-md-4 " >
            <div className="review-content border p-4 border-top-0">
                <div className="p-4 " >
                    <p className="lh-base" >{data.comment}</p>
                </div>
                <div className="row" p-3>
                    <div className="col-md-4">
                        <img className="img-fluid" src={data.img} alt="" />
                    </div>
                  
                    <div className="col-md-8 ">
                        <h5 className="text" >{data.name}</h5>
                        <h6 className="lead"> {data.title} </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;