import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import Button from "./Button";
import Notice from "./Notice";

interface iReviews extends React.ComponentProps<'div'> {}

function Reviews({...rest}: iReviews) {
    const initialVote = 0
    const [vote, setVote] = useState(initialVote)

    return (
        <>
            <div {...rest}>
                <Button label={<FaStar />} onClick={() => setVote(1)} className="star-button" />
                <Button label={<><FaStar /><FaStar /></>} onClick={() => setVote(2)} className="star-button" />
                <Button label={<><FaStar /><FaStar /><FaStar /></>} onClick={() => setVote(3)} className="star-button" />
                <Button label={<><FaStar /><FaStar /><FaStar /><FaStar /></>} onClick={() => setVote(4)} className="star-button" />
                <Button label={<><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>} onClick={() => setVote(5)} className="star-button" />
                <br />
                <h1>Il tuo voto &egrave;: {vote}</h1>
            </div>
            <Notice vote={vote} />
        </>
    )
}

export default Reviews