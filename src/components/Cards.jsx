import { Link } from "react-router-dom";

export default function Cards(props) {
  return (
    <div>
<div className="card" >
  <img className="card-img-top " src={props.img} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <Link href={props.link} className="btn btn-primary">Know More</Link>
  </div>
</div>
    </div>
  )
}