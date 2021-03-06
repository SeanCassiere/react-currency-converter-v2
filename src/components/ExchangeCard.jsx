import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Card,
	InputNumber,
	Button,
	Tooltip,
	Select,
	Form,
	Input,
	Space,
	Divider,
	Typography,
} from "antd";
import { ReloadOutlined, SaveOutlined } from "@ant-design/icons";

import { getRates } from "../redux/actions/currencyActions";
import { addToFavorites } from "../redux/actions/favoriteActions";

import { currencies } from "../utils/currencies";
import { calculateTotalConversionAmount } from "../utils/calculations";

const { Text } = Typography;

const CurrencySelectComponent = (props) => (
	<Select value={props.value} onSelect={(e) => props.setter(e)} showSearch>
		{currencies.map((e, i) => (
			<Select.Option value={e} key={i}>
				{e}
			</Select.Option>
		))}
	</Select>
);

const ExchangeCard = ({ saveToStorage }) => {
	const dispatch = useDispatch();

	const [amount, setAmount] = useState(1);
	const [baseCurrency, setBaseCurrency] = useState("USD");
	const [toCurrency, setToCurrency] = useState("LKR");
	const [label, setLabel] = useState("");

	const currencySelector = useSelector((state) => state.currencyDetails);
	const { loading, rates } = currencySelector;

	useEffect(() => {
		dispatch(getRates(baseCurrency));
	}, [dispatch, baseCurrency]);

	const handleAddToFav = () => {
		let stateLabel = label;
		if (saveToStorage && stateLabel === "") {
			stateLabel = "No Label";
		}
		const item = {
			date: Date.now(),
			label: stateLabel,
			baseAmount: amount,
			baseCurrency: baseCurrency,
			toCurrency,
			calculatedAmount: calculateTotalConversionAmount(
				amount,
				toCurrency,
				rates
			),
		};
		dispatch(addToFavorites(item));
		resetCardValues();
	};

	const resetCardValues = () => {
		setAmount(0);
		setBaseCurrency("USD");
		setToCurrency("LKR");
		setLabel("");
	};

	return (
		<div style={{ width: "100%" }}>
			<Card
				title='Converter'
				loading={loading}
				size='default'
				extra={
					<Tooltip title='Get latest rates'>
						<Button
							type='primary'
							shape='circle'
							size='default'
							loading={loading}
							icon={<ReloadOutlined />}
							onClick={() => dispatch(getRates(baseCurrency))}
						/>
					</Tooltip>
				}
			>
				<Form
					labelCol={4}
					wrapperCol={{ span: 20 }}
					layout='horizontal'
					size='default'
					onFinish={() => handleAddToFav()}
				>
					{saveToStorage && (
						<Form.Item label='Label'>
							<Input
								placeholder='What is this conversion?'
								value={label}
								onChange={(e) => setLabel(e.target.value)}
							/>
						</Form.Item>
					)}

					<Form.Item label='From' required={true}>
						<InputNumber
							min={0}
							keyboard={true}
							value={amount}
							defaultValue={1}
							onChange={(e) => setAmount(parseFloat(e))}
							style={{ width: "100%" }}
						/>
					</Form.Item>

					<Form.Item label='I have' required={true}>
						<CurrencySelectComponent
							value={baseCurrency}
							setter={setBaseCurrency}
						/>
					</Form.Item>

					<Form.Item label='I want' required={true}>
						<CurrencySelectComponent
							value={toCurrency}
							setter={setToCurrency}
						/>
					</Form.Item>

					<Divider plain orientation='left'>
						{!loading && (
							<Text code level={1}>
								Amount:{" "}
								{JSON.stringify(
									calculateTotalConversionAmount(amount, toCurrency, rates)
								)}
							</Text>
						)}
					</Divider>

					{saveToStorage && (
						<Form.Item>
							<Space size='small'>
								<Button htmlType='button' size='default'>
									Reset
								</Button>
								<Button
									type='primary'
									size='default'
									icon={<SaveOutlined />}
									htmlType='submit'
								>
									Save
								</Button>
							</Space>
						</Form.Item>
					)}
				</Form>
			</Card>
		</div>
	);
};

export default ExchangeCard;

ExchangeCard.defaultProps = {
	saveToStorage: true,
};
