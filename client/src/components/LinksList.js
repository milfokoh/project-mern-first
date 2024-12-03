import React from 'react';
import { Link } from 'react-router-dom';

export const LinksList = links => {
	if (links.length) {
		return <p className='center'>Актуальных данных не найдено</p>;
	}
	return (
		<div className='row-nav-page'>
			<p className='p-page-info'>Нет данных</p>
		</div>
	);
};
