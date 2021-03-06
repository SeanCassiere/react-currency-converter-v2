import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Card,
	InputNumber,
	Button,
	Tooltip,
	Select,
	Row,
	Col,
	Form,
	Space,
} from "antd";
import { ReloadOutlined } from "@ant-design/icons";

import { getRates } from "../redux/actions/currencyActions";

const { Option } = Select;

const ExchangeCard = () => {
	const dispatch = useDispatch();

	const [value, setValue] = useState(1.0);

	const currencySelector = useSelector((state) => state.currencyDetails);
	const { loading } = currencySelector;

	useEffect(() => {
		dispatch(getRates());
	}, [dispatch]);

	const CurrencyOptions = ({ value, setter }) => {
		<Select
			showSearch
			defaultValue={value}
			style={currencyInputStyle}
			onChange={(e) => setter(e)}
		>
			<Option value='USD'>USD</Option>
			<Option value='LKR'>LKR</Option>
		</Select>;
	};

	return (
		<div style={{ width: "100%" }}>
			<Card
				title='Converter'
				loading={loading}
				size='small'
				extra={
					<Tooltip title='Get latest rates'>
						<Button
							type='primary'
							shape='circle'
							size='small'
							loading={loading}
							icon={<ReloadOutlined />}
							onClick={() => dispatch(getRates())}
						/>
					</Tooltip>
				}
			>
				<Row justify='space-around' style={rowMarginStyle}>
					<Col span={12}>
						<Form.Item name='FromCurrency' label='I have'>
							<Select showSearch defaultValue='USD' style={currencyInputStyle}>
								<Option value='USD'>USD</Option>
								<Option value='LKR'>LKR</Option>
							</Select>
						</Form.Item>
					</Col>

					<Col span={12}>
						<Form.Item name='ToCurrency' label='I want'>
							<Select showSearch defaultValue='USD' style={currencyInputStyle}>
								<Option value='USD'>USD</Option>
								<Option value='LKR'>LKR</Option>
							</Select>
						</Form.Item>
					</Col>
				</Row>

				<Row justify='space-around' style={rowMarginStyle}>
					<Col span={12}>
						<Form.Item name='FromAmount' label='Amount'>
							<InputNumber
								min={0}
								defaultValue={value}
								formatter={(value) =>
									`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
								}
								parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
								onChange={(e) => setValue(e)}
								keyboard={true}
								style={currencyInputStyle}
							/>
						</Form.Item>
					</Col>

					<Col span={12}>
						<Form.Item name='ToAmount' label='Amount'>
							<InputNumber
								min={0}
								defaultValue={value}
								formatter={(value) =>
									`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
								}
								parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
								onChange={(e) => setValue(e)}
								keyboard={true}
								style={currencyInputStyle}
							/>
						</Form.Item>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default ExchangeCard;

ExchangeCard.defaultProps = {
	saveToStorage: true,
};

const currencyInputStyle = { width: 120 };

const rowMarginStyle = { marginLeft: 20 };
