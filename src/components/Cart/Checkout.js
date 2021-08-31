import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isNotEmpty = (value) => {
  return value.trim() !== '';
}

const hasFiveChars = (value) => {
  return value.length === 5;
}

const Checkout = (props) => {

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postcode: true
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postcodeInputRef = useRef();
  const cityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
  
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostcode = postcodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = isNotEmpty(enteredName);
    const enteredStreetIsValid = isNotEmpty(enteredStreet);
    const enteredPostcodeIsValid = hasFiveChars(enteredPostcode);
    const enteredCityIsValid =  isNotEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postcode: enteredPostcodeIsValid
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostcodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street'ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street.</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.postcode ? '' : classes.invalid}`}>
        <label htmlFor='postal'>Post Code</label>
        <input type='text' id='postal'ref={postcodeInputRef} />
        {!formInputsValidity.postcode && <p>Please enter a valid postcode.</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.postcode ? '' : classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city'ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
