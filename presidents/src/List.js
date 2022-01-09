import React, { useState } from 'react';
import data from './data';

function List() {
	const [people, setPeople] = useState(data);
	const dismiss = (id) => {
		let newPeople = people.filter((person) => {
			return person.id !== id;
		});
		setPeople(newPeople);
	};
	return (
		<React.Fragment>
			<h2>USA Presidents</h2>
			<h3>{people.length} Presidents left</h3>
			{people.map((person) => {
				const { id, name, yearsOfService, image } = person;
				return (
					<article key={id} className='person'>
						<img src={image} alt={name} />
						<div className='presidents'>
							<div>
								<h4>{name}</h4>
								<p>{yearsOfService}</p>
							</div>
							<button onClick={() => dismiss(id)}>X</button>
						</div>
					</article>
				);
			})}
			<button className='btn' onClick={() => setPeople([])}>dismiss all</button>
		</React.Fragment >
	);
}

export default List;
