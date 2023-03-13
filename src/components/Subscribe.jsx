const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe__container container">
        <div className="subscribe__header">
          <h2 className="subscribe__title">Будь в курсе</h2>
          <p className="subscribe__subtitle">
            Подпишитесь на рассылку акций и новостей компании
          </p>
        </div>
        <form action="#" className="subscribe__form">
          <input type="text" className="subscribe__input" placeholder="Имя" />
          <input type="text" className="subscribe__input" placeholder="Email" />
          <button type="submit">Подписаться</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
