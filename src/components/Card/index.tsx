import React from 'react';
import style from './card.module.css';
import clsx from 'clsx';

interface CardProps {
  title: string;
  description?: string;
  url: string;
  imageUrl: string;
  width: number;
  wide: boolean;
}

export default function CardNews(props: CardProps) {
  return (
    <div className={!props.wide ? clsx(style.card1, style.card) : (props.width > 768 ? clsx(style.card2, style.card) : clsx(style.card3, style.card)) }>
      <div
        className={style.thumb}
        style={{
          background: `url(${props.imageUrl}) no-repeat center`,
          backgroundSize: 'cover',
        }}
      />
      <a className={style.card__caption} target='_blank' href={props.url} style={{ textDecoration: 'none' }}>
        <h2 className={style.card__title}>{props.title}</h2>
        {props.description ? <>
          <p className={style.card__snippet}>
            {props.description}
          </p>
        </> : <></>}
      </a>
    </div>
  );
}
