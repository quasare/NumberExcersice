import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {CHANGE_NUM} from './actionTypes'

export default function NumberInputs(){
    const dispatch = useDispatch();
    const {num1, num2}=  useSelector(state => ({num1: state.num1, num2: state.num2}), shallowEqual)
	const [ inputs, setInputs ] = useState({ num1, num2 });
	const handleChange = e => {
		const { value, name } = e.target;
		setInputs(inputs => ({ ...inputs, [name]: +value }));
	};
	const changeNum = num => {
		dispatch({
			type  : CHANGE_NUM,
			num,
			value : inputs[num]
		});
	};
	return (
		<div>
			<div>
				<label htmlFor="num1">First Number</label>
				<input type="number" id="num1" value={inputs.num1} onChange={handleChange} name="num1" />
				<button onClick={() => changeNum('num1')}>Update</button>
			</div>
			<div>
				<label htmlFor="num2">Second Number</label>
				<input type="number" id="num2" value={inputs.num2} onChange={handleChange} name="num2" />
				<button onClick={() => changeNum('num2')}>Update</button>
			</div>
		</div>
	);
}
