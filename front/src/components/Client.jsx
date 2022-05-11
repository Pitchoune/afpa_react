import React from "react";

const Client = ({client}) => {
	return (
		<div className="card col-md-3 m-3" style={{ width: '18rem' }}>
			<div className="card-body">
				<h5 className="card-title">{client.prenom} {client.nom}</h5>
				<p className="card-text">{client.societe} {client.ca}</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	);
}

export default Client;