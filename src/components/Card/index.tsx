import React from 'react';
import style from './card.module.css';
import clsx from 'clsx';

interface CardProps {
  title: string;
  description?: string;
  url: string;
  imageUrl: string;
  idx: number;
}

export default function CardNews(props: CardProps) {
  return (
    <div className={props.idx < 4 ? clsx(style.card1, style.card) : clsx(style.card2, style.card)}>
      <div
        className={style.thumb}
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.16) 44.79%, rgba(0, 0, 0, 0.64) 100%, rgba(0, 0, 0, 0.75) 100%), url(${props.imageUrl}) no-repeat center`,
          backgroundSize: 'cover',
        }}
      ></div>
      <figcaption className={style.card__caption}>
        <h2 className={style.card__title}>{props.title}</h2>
        {props.description ? <>
          <p className={style.card__snippet}>
            {props.description}
          </p>
        </> : <></>}
        <a className={style.card__button} onClick={() => window.open(props.url)}>
          Read more
        </a>
      </figcaption>
    </div>
  );
}
