import React from 'react';

export const ContactForm = (props) => {
	return (
		<>
			<form onSubmit={props.handleSubmit}>
				<input
					type="text"
					placeholder="First Last"
					value={props.name}
					onChange={(e) => {
						props.setName(e.target.value);
					}}></input>
				<input
					type="tel"
					pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
					placeholder="555-555-5555"
					value={props.phone}
					onChange={(e) => {
						props.setPhone(e.target.value);
					}}></input>
				<input
					type="email"
					placeholder="example@asd.com"
					value={props.email}
					onChange={(e) => {
						props.setEmail(e.target.value);
					}}></input>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};
