import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ShowList = ({ show }) => {
	const navigate = useNavigate();

	const handleRoute = id => {
		navigate(`/show/${id}`);
	};

	if (!show) return null;
	return (
		<Col ms={12} md={6} lg={4} xl={3} className="my-2">
			<Card className="h-100">
				<Card.Header>
					<Card.Img
						src={show.show.image.original}
						alt={show.show.name}
						fluid="true"
					/>
				</Card.Header>
				<Card.Body>
					<Card.Title>{show.show.name}</Card.Title>
					<p>Language: {show.show.language}</p>
					<p>
						Rating: {show.show.rating.average ? show.show.rating.average : 0}
					</p>
				</Card.Body>
				<Card.Footer>
					<Button
						className="col-12"
						type="button"
						onClick={() => handleRoute(show.show.id)}
					>
						More Details
					</Button>
				</Card.Footer>
			</Card>
		</Col>
	);
};

export default ShowList;
