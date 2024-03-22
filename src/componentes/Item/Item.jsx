import { Link } from "react-router-dom";

export const Item = ({ id, name, img, description }) => {
  return (
    
    <div className="border border-3 p-3 d-flex flex-column m-2 ">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="foto" />
          <p className="card-text"> {description} </p>
          <Link to={`/item/${id}`} >
            <button className="btn btn-outline-success">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
