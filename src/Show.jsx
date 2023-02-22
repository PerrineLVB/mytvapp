import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import { Link } from "react-router-dom"

export function Show() {
    const params = useParams()
    const [show, setShow] = useState(null)

    useEffect(() => {
        fetch('https://api.tvmaze.com/shows/' + params.id + '?embed=cast')
            .then(response => response.json())
            .then((data) => setShow(data))
    }, [show])

    if (show) {
        return (
            <>
                <h1>{show.name}</h1>
                <h4>Status : {show.status}</h4>
                <h5>Premiered : {show.premiered}</h5>
                <h6>First aired on <strong>{show.network?.name}</strong> in <strong>{show.network?.country?.name}</strong></h6>
                <h6>Rating : {show.rating.average}/10</h6>
                {show.image != null ? <img src={show.image.medium} className="card-img-top w-25 rounded mb-4" alt="show image" /> : <img src="https://cdn-icons-png.flaticon.com/512/7734/7734301.png" alt="no image to be shown" className="card-img-top" />}
                <p>{show.genres?.map((genre) => <span key={genre} className="badge text-bg-warning mx-1">{genre}</span>)}</p>
                <p>{parse(show.summary)}</p>
                <div className='d-flex flex-column align-items-center mb-4'>
                    <h4>Starring :</h4>
                    <ul className="list-group w-40">
                        {show._embedded.cast.map((star) => <li className="list-group-item" key={star}><Link to={"/actor/" + star.person.id} >{star.person.name}</Link> as <em>{star.character.name}</em></li>)}
                    </ul>
                </div>
                <Link to={"/"}>Back to homepage</Link>
            </>
        )
    } else {
        return (
            <>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </>
        )
    }
}