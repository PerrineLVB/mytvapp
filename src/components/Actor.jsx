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

    useEffect(() => {
        fetch('https://api.tvmaze.com/people/' + params.id + '/castcredits?embed=show')
            .then(response => response.json())
            .then((data) => setActorsShows(data))
    }, [actorsShows])

    if (actor && actorsShows) {
        return (
            <>
                <h1>{actor.name}</h1>
                {actor.image != null ? <img src={actor.image.medium} className="rounded" alt="actor picture" /> : <img src="https://cdn-icons-png.flaticon.com/512/7734/7734301.png" alt="no image to be shown" />}
                <h4>Born {actor.birthday}</h4>
                <h4 className="mb-4">From {actor.country?.name}</h4>
                <div className="mb-4">
                    <h3>Seen in :</h3>
                    {actorsShows.map((oneShow) => <p key={oneShow._embedded?.show?.id}><Link to={"/show/" + oneShow._embedded?.show?.id}>{oneShow._embedded?.show?.name}</Link></p>)}
                </div>
                <hr />
                <Link to={"/"}>Back to homepage</Link>
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