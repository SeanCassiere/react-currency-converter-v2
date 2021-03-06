import React from "react";
import { Layout, Menu, Typography, Row, Col } from "antd";

import HeaderBlock from "./layout/HeaderBlock";
import FooterBlock from "./layout/FooterBlock";

import ExchangeCard from "./components/ExchangeCard";

const { Content } = Layout;

const App = () => {
	return (
		<Layout style={{ minHeight: "100vh" }}>
			<HeaderBlock />
			<Content style={{ padding: "0 35px", marginTop: 64 }}>
				<div style={{ paddingTop: 24, paddingBottom: 24 }}>
					<Row justify='space-around' align='middle' gutter={[16, 16]}>
						<Col xs={24} sm={8} md={8} lg={8} xl={8}>
							<div className='height-50'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
								optio sequi cumque facilis voluptatum, cum aperiam nihil
								accusantium possimus soluta.
							</div>
						</Col>
						<Col xs={24} sm={8} md={8} lg={8} xl={8}>
							<div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
								optio sequi cumque facilis voluptatum, cum aperiam nihil
								accusantium possimus soluta.
							</div>
						</Col>
					</Row>
				</div>
			</Content>
			<FooterBlock />
		</Layout>
	);
};

export default App;
