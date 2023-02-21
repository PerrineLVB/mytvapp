import { useState, useEffect } from "react"
import React from "react";

export function Search() {
    const [query, setQuery] = useState("coucou");
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=" + query)
            .then((response) => response.json())
            .then((data) => setResult(data))
    })

    const show = result.map((show) =>
        <div key={show.show.id} className="card m-3" style={{ width: 15 + 'rem' }}>
        {show.show.image != null ? <img src={show.show.image.medium} className="card-img-top"/> : <img src="https://cdn-icons-png.flaticon.com/512/7734/7734301.png" className="card-img-top"/>}
            <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <a href="#" className="btn btn-primary">See more</a>
            </div>
        </div>)

    return (
        <React.Fragment>
            <input className="mb-5" placeholder="recherche" type="text" onChange={(e) => setQuery(e.target.value)} value={query} />
            <div className="d-flex flex-wrap justify-content-center">
                {show}
            </div>
        </React.Fragment>
    )
}