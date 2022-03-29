import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ShowsContext } from "../context/ShowsProvider";
import FormModal from "../components/FormModal";

const ShowDetails = () => {
	const { id } = useParams();
	const { shows } = useContext(ShowsContext);
	const [selectedShow, setSelectedShow] = useState({});
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		if (shows.length) {
			const show = shows.find(show => show.show.id === Number(id));
			setSelectedShow(show);
		}
	}, [shows, id]);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	if (!selectedShow?.show?.id) return null;
	return (
		<Container className="py-5">
			<h1 className="text-center">Details Page</h1>
			<Row className="mt-5">
				<Col sm={12} md={6}>
					<Image
						src={selectedShow.show.image.original}
						alt={selectedShow.show.name}
						fluid="true"
					/>
				</Col>
				<Col sm={12} md={6}>
					<h2>{selectedShow.show.name}</h2>
					<p>Language: {selectedShow.show.language}</p>
					<p className="my-0">
						Rating:{" "}
						{selectedShow.show.rating.average
							? selectedShow.show.rating.average
							: 0}
					</p>
					<p>
						Summery:{" "}
						{selectedShow.show.summary.slice(
							3,
							selectedShow.show.summary.length - 4
						)}
					</p>
					<Button type="button" onClick={handleOpenModal}>
						Perches Ticket
					</Button>
				</Col>
			</Row>
			{openModal ? (
				<FormModal
					setOpenModal={setOpenModal}
					openModal={openModal}
					selectedShow={selectedShow}
				/>
			) : null}
		</Container>
	);
};

export default ShowDetails;
