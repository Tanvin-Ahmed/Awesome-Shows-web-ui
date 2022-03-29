import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Button, Image, Form } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		overflowY: "auto",
		height: "95vh",
	},
};

Modal.setAppElement("#root");

const FormModal = ({ setOpenModal, openModal, selectedShow }) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const closeModal = () => {
		setOpenModal(false);
	};

	useEffect(() => {
		if (localStorage.getItem("show/userInfo")) {
			const { name, email } = JSON.parse(localStorage.getItem("show/userInfo"));
			setName(name);
			setEmail(email);
		}
	}, []);

	const handlePerches = e => {
		e.preventDefault();

		setLoading(true);
		setError("");
		setSuccess("");
		localStorage.setItem("show/userInfo", JSON.stringify({ name, email }));
		setLoading(false);
		setError("");
		setSuccess("Successfully Parched!");
		setTimeout(() => {
			setSuccess("");
			closeModal();
		}, 700);
	};
	return (
		<Modal
			isOpen={openModal}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<div className="d-flex justify-content-between aligned-items-center">
				<h2>Confirm Ticket</h2>
				<Button onClick={closeModal}>close</Button>
			</div>
			<div className="text-center">
				<Image
					src={selectedShow.show.image.original}
					alt={selectedShow.show.name}
					fluid="true"
					style={{ width: "30%" }}
				/>
			</div>
			<Form
				onSubmit={handlePerches}
				className="d-flex justify-content-center align-items-center flex-column"
			>
				<Form.Label>
					Show Name
					<Form.Control type="text" value={selectedShow.show.name} readOnly />
				</Form.Label>
				<Form.Label>
					Show Time
					<Form.Control
						type="text"
						value={selectedShow.show.schedule.time}
						readOnly
					/>
				</Form.Label>
				<Form.Label>
					Show Day
					<Form.Control
						type="text"
						value={selectedShow.show.schedule.days[0]}
						readOnly
					/>
				</Form.Label>
				<Form.Label>
					User Name
					<Form.Control
						type="text"
						placeholder="User Name"
						value={name}
						onChange={e => setName(e.target.value)}
						required
					/>
				</Form.Label>
				<Form.Label>
					User Email
					<Form.Control
						type="email"
						placeholder="Email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
				</Form.Label>

				<Button type="submit">Perches</Button>
			</Form>
			<div className="text-center">
				{loading ? (
					<Loader />
				) : error ? (
					<Message>{error}</Message>
				) : success ? (
					<Message variant="success">{success}</Message>
				) : null}
			</div>
		</Modal>
	);
};

export default FormModal;
