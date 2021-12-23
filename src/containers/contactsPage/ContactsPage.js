import React, { useState, useEffect } from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
	const [contacts, addContact] = [props.contacts, props.addContact];

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [duplicate, setDuplicate] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!duplicate) {
			addContact(name, phone, email);
			setName('');
			setPhone('');
			setEmail('');
		} else {
			console.log('Error, duplicate entry');
		}
	};

	useEffect(() => {
		contacts.forEach((con) => {
			if (name === con.name) {
				setDuplicate(true);
			} else {
				setDuplicate(false);
			}
		});
	}, [contacts, name]);

	return (
		<div>
			<section>
				<h2>Add Contact</h2>
				<ContactForm
					name={name}
					setName={setName}
					phone={phone}
					setPhone={setPhone}
					email={email}
					setEmail={setEmail}
					handleSubmit={handleSubmit}
				/>
			</section>
			<hr />
			<section>
				<h2>Contacts</h2>
				<TileList array={contacts} />
			</section>
		</div>
	);
};
