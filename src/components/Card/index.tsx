import React from 'react';
import style from './card.module.css';
import clsx from 'clsx';
import { News } from '../../data/AboutUs';

interface CardProps {
  news: News;
  idx: number;
}

export default function CardNews(props: CardProps) {
  return (
    <div className={props.idx < 4 ? clsx(style.card1, style.card) : clsx(style.card2, style.card)}>
      <div
        className={style.thumb}
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.16) 44.79%, rgba(0, 0, 0, 0.64) 100%, rgba(0, 0, 0, 0.75) 100%), url(${props.news.imageUrl}) no-repeat center`,
          backgroundSize: 'cover',
        }}
      ></div>
      <figcaption className={style.card__caption}>
        <h2 className={style.card__title}>{props.news.title}</h2>
        <p className={style.card__snippet}>
          {props.news.description}
        </p>
        <a className={style.card__button} onClick={() => window.open(props.news.url)}>
          Read more
        </a>
      </figcaption>
    </div>
  );
}
