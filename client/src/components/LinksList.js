import React from 'react';
import { Link } from 'react-router-dom';

export const LinksList = links => {
	if (links.length) {
		return <p className='center'>Информации пока нет...</p>;
	}
	return (
		<div className='row-nav-page'>
			<p className='p-page-info'>Пока данных нет и не появятся!</p>
		</div>
	);
};
