import React from "react";
import { Link } from "react-router-dom";

const Client = ({client}) => {
	return (
		<div className="card col-md-3 m-3" style={{ width: '18rem' }}>
			<div className="card-body">
				<h5 className="card-title">{client.prenom} {client.nom}</h5>
				<p className="card-text">{client.societe} {client.ca}</p>
				<Link to={`/clients/${client.id}`} className="btn btn-primary">Voir</Link>
			</div>
		</div>
	);
}

export default Client;