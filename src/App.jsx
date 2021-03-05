import React from "react";
import { Layout, Menu, Typography } from "antd";

import ExchangeCard from "./components/ExchangeCard";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
	return (
		<Layout>
			<Header style={{ position: "fixed", width: "100%" }}>
				<Menu theme='dark' mode='horizontal'>
					<Menu.Item>
						<Title level={2} style={{ color: "white" }}>
							Currency Converter
						</Title>
					</Menu.Item>
				</Menu>
			</Header>
			<Content
				className='site-layout'
				style={{ padding: "0 35px", marginTop: 64 }}
			>
				<div
					className='site-layout-background'
					style={{ paddingTop: 24, paddingBottom: 24, minHeight: 650 }}
				>
					<ExchangeCard />
				</div>
			</Content>
			<Footer style={{ textAlign: "center" }}>
				Ant Design ©2018 Created by Ant UED
			</Footer>
		</Layout>
	);
};

export default App;
