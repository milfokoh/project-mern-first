import React, { useContext, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import './style.css';

const CreatePage = () => {
	const history = useHistory();

	const auth = useContext(AuthContext);

	const { request } = useHttp();

	const [link, setLink] = useState('');

	useEffect(() => {
		window.M.updateTextFields();
	}, []);

	const pressHandler = async event => {
		if (event.key === 'Enter') {
			try {
				const data = await request(
					'/api/link/generate',
					'POST',
					{ from: link },
					{
						Authorization: `Bearer ${auth.token}`,
					}
				);
				history.push(`/detail/${data.link._id}`);
			} catch (error) {}
		}
	};
	const setLinkVal = event => {
		setLink(event.target.value);
	};

	return (
		<div className='row-home'>
			<h1 className='page-title'>Главная страница</h1>
			<p>В надежде что тут будут распологаться учебные материалы</p>
			<p>Путь воинов</p>
		</div>
	);
};

export default CreatePage;
