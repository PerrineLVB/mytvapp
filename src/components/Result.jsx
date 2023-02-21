import { Link } from "react-router-dom"

export function Result(props) {
    const {show} = props.details

    return (
        <div className="card m-2" style={{ width: 15 + 'rem' }}>
        {show.image != null ? <img src={show.image.medium} className="card-img-top" alt="show image"/> : <img src="https://cdn-icons-png.flaticon.com/512/7734/7734301.png" alt="no image to be shown" className="card-img-top"/>}
            <div className="card-body">
                <h5 className="card-title">{show.name}</h5>
                <Link to={"show/"+show.id} type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tell me more about this show !" className="btn btn-outline-secondary fa-solid fa-eye mt-3"></Link>
            </div>
        </div>
    )
}