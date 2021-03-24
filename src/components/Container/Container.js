import s from './Container.module.css';

export default function Container({ children }) {
  return (
    <div className={s.container}>
      <p className={s.Container__top}></p>
      {children}
      <p className={s.Container__bottom}></p>
    </div>
  );
}
