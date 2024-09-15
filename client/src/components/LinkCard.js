import React from "react";


export const LinkCard = ( { link }) => {
    return (
        <div>
            <h2> Не знаю что тут будет </h2>
            <p>я просто ссылка: <a href={link.to} target="_blank" rel="noreferrer noopener">{link.to}</a></p>
            <p>откуда: <a href={link.from} target="_blank" rel="noreferrer noopener">{link.from}</a></p>
            <p>количество кликов по ссылке: <strong>{link.clicks}</strong></p>
            <p>дата создания <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </div>
    );
};