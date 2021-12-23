import React from 'react';

export const ContactPicker = (props) => {
	return (
		<>
			<select onChange={props.onChange} defaultValue="default">
				<option key="default" value="default">
					Choose a contact...
				</option>
				{props.contacts.map((contact) => {
					return (
						<option key={contact.name} value={contact.name}>
							{contact.name}
						</option>
					);
				})}
			</select>
		</>
	);
};
