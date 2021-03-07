import React from "react";
import { Layout, Row, Col } from "antd";

import HeaderBlock from "./layout/HeaderBlock";
import FooterBlock from "./layout/FooterBlock";

import ExchangeCard from "./components/ExchangeCard";
import SavedConversions from "./layout/SavedConversions";

const { Content } = Layout;

const App = () => {
	return (
		<Layout style={{ minHeight: "100vh" }}>
			<HeaderBlock />
			<Content style={{ padding: "0 35px", marginTop: 50 }}>
				<div style={{ paddingTop: 24, paddingBottom: 24 }}>
					<Row
						justify='center'
						align='middle'
						gutter={[16, 16]}
						style={colHeightStyle}
					>
						<Col xs={24} sm={24} md={14} lg={6} xl={6}>
							<div style={{ marginTop: 30 }}>
								<ExchangeCard saveToStorage={true} />
							</div>
						</Col>
						<Col xs={24} sm={24} md={14} lg={12} xl={12}>
							<div style={{ width: "100%", border: "0.5px solid black" }}>
								<SavedConversions />
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

const colHeightStyle = {
	minHeight: "70vh",
	display: "flex",
	alignItems: "center",
};
