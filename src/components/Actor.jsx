import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export function Actor() {
    const params = useParams()
    const [actor, setActor] = useState(null)
    const [actorsShows, setActorsShows] = useState(null)

    useEffect(() => {
        fetch('https://api.tvmaze.com/people/' + params.id + '?embed=castcredits')
            .then(response => response.json())
            .then((data) => setActor(data))
    }, [actor])

    useEffect (() => {
        fetch ('https://api.tvmaze.com/people/' + params.id + '/castcredits?embed=show')
            .then (response => response.json())
            .then((data) => setActorsShows(data))
    }, [actorsShows])
    
    if (actor && actorsShows) {
        return (
            <>
                <h1>{actor.name}</h1>
                {actor.image != null ? <img src={actor.image.medium} /> : <img src="https://cdn-icons-png.flaticon.com/512/7734/7734301.png" alt="no image to be shown" className="card-img-top" />}
                <h4>Born {actor.birthday}</h4>
                <h4>From {actor.country.name}</h4>
                <div>
                    <h3>Seen in :</h3>
                    <ul>
                        {actorsShows.map((show) => <li key={show}><Link to={"/show/" + show.id}>{show.name}</Link></li>)}
                    </ul>
                </div>
            </>
        )
    } else {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
}