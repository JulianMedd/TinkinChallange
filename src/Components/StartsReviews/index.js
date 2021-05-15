import React from 'react';
import "./startsReviews.scss";

export const StartsReviews = ({reviews}) =>{

    return (
        <form>
            <p className="reviews">
                <input type="radio" name="stars" value="4"/>
                    <label className={reviews>=1 ? "startActive" : ""} >★</label>
                <input type="radio" name="stars" value="3"/>
                    <label className={reviews>=2 ? "startActive" : ""} >★</label>
                <input type="radio" name="stars" value="2"/>
                    <label className={reviews>=3 ? "startActive" : ""} >★</label>
                <input type="radio" name="stars" value="1"/>
                    <label className={reviews>=4 ? "startActive" : ""} >★</label>
            </p>
        </form>
    )
}