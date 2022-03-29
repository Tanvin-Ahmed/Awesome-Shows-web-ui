import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import ShowList from "../components/ShowList";
import { ShowsContext } from "../context/ShowsProvider";

const Home = () => {
	const { loading, error, shows } = useContext(ShowsContext);

	return (
		<Container>
			{loading ? (
				<div
					className="d-flex justify-content-center align-items-center"
					style={{ height: "100vh" }}
				>
					<Loader />
				</div>
			) : error ? (
				<div
					className="d-flex justify-content-center align-items-center"
					style={{ height: "100vh" }}
				>
					<Message>{error}</Message>
				</div>
			) : (
				<Row>
					{shows.map(show => (
						<ShowList key={show.show.id.toString()} show={show} />
					))}
				</Row>
			)}
		</Container>
	);
};

export default Home;
