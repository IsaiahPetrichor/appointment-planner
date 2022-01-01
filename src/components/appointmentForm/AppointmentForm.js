import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
	contacts,
	title,
	setTitle,
	contact,
	setContact,
	date,
	setDate,
	time,
	setTime,
	handleSubmit,
}) => {
	const getTodayString = () => {
		const [month, day, year] = new Date()
			.toLocaleDateString('en-US')
			.split('/');
		return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="title">Appointment Name: </label>
			<input
				id="title"
				type="text"
				value={title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
				required></input>
			<label htmlFor="date">Date: </label>
			<input
				id="date"
				type="date"
				value={date}
				min={getTodayString}
				onChange={(e) => {
					setDate(e.target.value);
				}}
				required></input>
			<label htmlFor="time">Time: </label>
			<input
				id="time"
				type="time"
				value={time}
				onChange={(e) => {
					setTime(e.target.value);
				}}
				required></input>
			<ContactPicker
				contacts={contacts}
				onChange={(e) => {
					setContact(e.target.value);
				}}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};
