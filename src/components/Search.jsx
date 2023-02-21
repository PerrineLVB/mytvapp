import { useState, useEffect } from "react"
import React from "react";
import { Result } from "./Result";

export function Search() {
    const [query, setQuery] = useState("canard");
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=" + query)
            .then((response) => response.json())
            .then((data) => setResults(data))        // on stocke dans le tableau vide results les données obtenues depuis l'api
    })

    return (
        <React.Fragment>
            <input className="mb-5" placeholder="recherche" type="text" onChange={(e) => setQuery(e.target.value)} value={query} />
            <div className="d-flex flex-wrap justify-content-center">
                {results.map((result) => <Result key={result.show.id} details={result} />)}
            </div>
        </React.Fragment>
    )
}