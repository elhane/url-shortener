import "./shortener-form.scss";

function ShortenerForm() {
  return (
    <form className="shortener-form" action="">
      <label className="shortener-form__label" htmlFor="shortener">Введите ссылку</label>
      <input className="shortener-form__input" type="text" name="shortener"/>
      <button className="shortener-form__button" type="submit">Сократить</button>
      <span className="shortener-form__error">Текст ошибки</span>
    </form>
  )
}

export default ShortenerForm;
