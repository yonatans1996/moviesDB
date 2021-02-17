import React from 'react'

function Popup({selected,closePopup}) {
    const drawStars=()=>{
        let str="";
        for(let i=1;i<selected.imdbRating;i++)
        {
            str+="⭐";
        }
        return str;
    }
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.Title}</h2>
                <span>{selected.Year}</span>
                <p className="rating">Rating: {selected.imdbRating} {drawStars()}</p>
                <div className="plot">
                   <img src={selected.Poster} alt={selected.Title}/> 
                   <p>{selected.Plot}</p>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup
