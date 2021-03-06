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
import { currencies } from "../utils/currencies";

const { Text } = Typography;

const CurrencySelectComponent = (props) => (
	<Select value={props.value} onSelect={(e) => props.setter(e)}>
		{currencies.map((e) => (
			<Select.Option value={e}>{e}</Select.Option>
		))}
	</Select>
);

const ExchangeCard = ({ saveToStorage }) => {
	const dispatch = useDispatch();

	const [amount, setAmount] = useState(1);
	const [baseCurrency, setBaseCurrency] = useState("USD");
	const [toCurrency, setToCurrency] = useState("LKR");
	const [toAmount, setToAmount] = useState(0);

	const currencySelector = useSelector((state) => state.currencyDetails);
	const { loading } = currencySelector;

	useEffect(() => {
		dispatch(getRates());
	}, [dispatch]);

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
							onClick={() => dispatch(getRates())}
						/>
					</Tooltip>
				}
			>
				<Form
					labelCol={4}
					wrapperCol={{ span: 20 }}
					layout='horizontal'
					size='default'
				>
					{saveToStorage && (
						<Form.Item label='Label' required={true}>
							<Input placeholder='What is this conversion?' />
						</Form.Item>
					)}

					<Form.Item label='From' required={true}>
						<InputNumber
							min={0}
							keyboard={true}
							value={amount}
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
						<Text code level={1}>
							Amount: {JSON.stringify(toAmount)}
						</Text>
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
