import React from 'react';
import Aux from '../../../hoc/Aux1';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}> {igKey}: {props.ingredients[igKey]}</li>
            );
        });
    return (
        <Aux>
            <p><strong>Your Order</strong></p>
            <p>A delicious burger with following Ingredients: </p>
            <ul>{ingredients}</ul>
            <p>Total Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContinue} btnType="Success">CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;