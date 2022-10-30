import './shortener-form.scss';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {fetchShortLinks} from '../../store/api-actions';
import {useDispatch} from 'react-redux';
import {useAppDispatch} from '../../hooks';

function ShortenerForm() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [urlValid, setUrlValid ] = useState(true);
  const [formData, setFormData] = useState({input: ''});
  const dispatch = useAppDispatch();

  const validations = {
    url: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
  };

  const validateUrl = (value: string) => {
    switch (true) {
      case value.length === 0:
        setError('please add a link');
        setUrlValid(false);
        break;
      case validations.url.test(value):
        setError('');
        setUrlValid(true);
        break;
      case !(validations.url.test(value)):
        setError('please enter a valid url');
        setUrlValid(false);
        break;
    }
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formValid) {
      console.debug('submit');
      dispatch(fetchShortLinks(formData));
      // evt.target.reset(); //currentTarget?
    }
  };

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    validateUrl(value);
    setUrl(value);
  };

  useEffect(() => {
    setFormValid(urlValid);
    setFormData({input: url});
  }, [url, urlValid]);

  useEffect(() => {
    // fetchShortLinks("")
  });

  return (
    <form className="shortener-form" action="" onSubmit={handleFormSubmit}>
      <input
        className="shortener-form__input"
        type="text"
        name="shortener"
        onChange={handleFieldChange}
        placeholder="Enter a link..."
      />
      <button className="shortener-form__button button" type="submit">Shorten</button>
      {
        !formValid ?
          <span className="shortener-form__error">{error}</span> : ''
      }
    </form>
  );
}

export default ShortenerForm;
