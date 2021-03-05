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

	return (
		<div>
			<Card
				title='Start converting currencies'
				style={{ width: 300 }}
				loading={loading}
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
				<Row>
					<Col span={12}>
						<Space>
							<Form.Item name='FromCurrency' label='From'>
								<Select showSearch defaultValue='USD' style={{ width: 90 }}>
									<Option value='USD'>USD</Option>
									<Option value='LKR'>LKR</Option>
								</Select>
							</Form.Item>
						</Space>
					</Col>

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
							/>
						</Form.Item>
					</Col>
				</Row>

				<Row>
					<Col span={12}>
						<Form.Item name='ToCurrency' label='To'>
							<Space size='large'></Space>
							<Select showSearch defaultValue='USD' style={{ width: 90 }}>
								<Option value='USD'>USD</Option>
								<Option value='LKR'>LKR</Option>
							</Select>
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
							/>
						</Form.Item>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default ExchangeCard;
