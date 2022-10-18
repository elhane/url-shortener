import "./shortener-form.scss";
import {useEffect, useState} from "react";

function ShortenerForm() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [urlValid, setUrlValid ] = useState(true);

  const validations = {
    url: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
  };

  const validateUrl = (value) => {
    console.log('validateUrl', value);
    switch (true) {
      case value.length === 0:
        setError('Please add a link');
        setUrlValid(false);
        break;
      case validations.url.test(value):
        setError('');
        setUrlValid(true);
        break;
      case !(validations.url.test(value)):
        setError('Please enter a valid url');
        setUrlValid(false);
        break;
    }
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (formValid) {
      console.debug('submit');
      evt.target.reset();
    }
  };

  const handleFieldChange = (evt) => {
    const {value} = evt.target;
    validateUrl(value);
    setUrl(value);
  };

  useEffect(() => {
    setFormValid(urlValid);
  }, [urlValid]);


  return (
    <form className="shortener-form" action="" onSubmit={handleFormSubmit}>
      <label
        className="shortener-form__label"
        htmlFor="shortener"
      >
        Введите ссылку
      </label>
      <input
        className="shortener-form__input"
        type="text"
        name="shortener"
        onChange={handleFieldChange}
      />
      <button className="shortener-form__button" type="submit">Сократить</button>
      {
        !formValid ?
          <span className="shortener-form__error">{error}</span> : ''
      }
    </form>
  )
}

export default ShortenerForm;
