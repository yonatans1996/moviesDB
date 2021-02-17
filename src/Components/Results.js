import React from 'react'
import Result from "./Result";
import "./Results.css"
function Results({results,openPopup}) {

    return (
        <section className="results">
            {
                !results?<h1 className="error">We didnt find anything...</h1>:(results.map(result=>{
                    return(<Result key={result.imdbID} result={result}
                        openPopup ={openPopup} />)
                }))
            }
            
        </section>
    )
}

export default Results
