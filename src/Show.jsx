import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Show() {
    const params = useParams()
    const [show, setShow] = useState([])

    useEffect(() => {
        fetch('https://api.tvmaze.com/shows/' + params.id + '?embed=cast')
            .then(response => response.json())
            .then((data) => setShow(data))
    })

    return (
        <React.Fragment>
            <h1>
                {show.name}
            </h1>
            <h5>Status : {show.status}</h5>
            {show.image != null ? <img src={show.image.medium} className="card-img-top w-25 rounded mb-4" alt="show image"/> : <img src="https://cdn-icons-png.flaticon.com/512/7734/7734301.png" alt="no image to be shown" className="card-img-top"/>}
            {<p>{show.genres.map((genre) => <span className="badge text-bg-warning mx-1">{genre}</span>)}</p>}
            <p>{show.summary}</p>
        </React.Fragment>
    )
}