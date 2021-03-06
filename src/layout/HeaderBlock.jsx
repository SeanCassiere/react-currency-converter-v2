import React from "react";
import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const HeaderBlock = () => {
	return (
		<Header style={headerBlockStyle}>
			<Title level={3} style={menuTitleStyle}>
				Currency Converter
			</Title>
		</Header>
	);
};

export default HeaderBlock;

const menuTitleStyle = {
	color: "#fff",
	width: "100%",
	textAlign: "center",
	margin: "16px 0 16px 0",
};

const headerBlockStyle = { position: "fixed", minWidth: "100%" };
