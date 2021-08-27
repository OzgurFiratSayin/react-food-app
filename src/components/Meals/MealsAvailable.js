import React, { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import classes from './MealsAvailable.module.css';



const MealsAvailable = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-http-6a583-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push( {
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);

  const mealList = meals.map(meal =>
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  );

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealsAvailable;