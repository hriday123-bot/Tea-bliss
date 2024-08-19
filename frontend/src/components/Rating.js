import React from 'react'
import {FaStar,FaStarHalfAlt,FaRegStar} from 'react-icons/fa'

const Rating=(rat,num)=>{
    console.log(rat,num);
    return(
        <>
        <div className="rating">
            <span>
                {rat>=1 ? <FaStar/> : rat>=.5 ? <FaStarHalfAlt/> :<FaRegStar/>}
            </span>
            <span>
                {rat>=2 ? <FaStar/> : rat>=1.5 ? <FaStarHalfAlt/> :<FaRegStar/>}
            </span>
            <span>
                {rat>=3 ? <FaStar/> : rat>=2.5 ? <FaStarHalfAlt/> :<FaRegStar/>}
            </span>
            <span>
                {rat>=4 ? <FaStar/> : rat>=3.5 ? <FaStarHalfAlt/> :<FaRegStar/>}
            </span>
            <span>
                {rat>=5 ? <FaStar/> : rat>=4.5 ? <FaStarHalfAlt/> :<FaRegStar/>}
            </span>
            <span className='rating-text'>({num && num})</span>
        </div>
        </>
    )

}

export default Rating;