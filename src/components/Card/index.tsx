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
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.16) 44.79%, rgba(0, 0, 0, 0.64) 100%, rgba(0, 0, 0, 0.75) 100%), url(${props.imageUrl}) no-repeat center`,
          backgroundSize: 'cover',
        }}
      />
      <figcaption className={style.card__caption}>
        <h2 className={style.card__title}>{props.title}</h2>
        {props.description ? <>
          <p className={style.card__snippet}>
            {props.description}
          </p>
        </> : <></>}
        <a className={style.card__button} target='_blank' href={props.url}>
          Read more
        </a>
      </figcaption>
    </div>
  );
}
