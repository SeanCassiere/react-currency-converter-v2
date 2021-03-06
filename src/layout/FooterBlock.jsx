import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterBlock = () => {
	return (
		<Footer style={footerBlockStyle}>
			Ant Design ©2018 Created by Ant UED
		</Footer>
	);
};

export default FooterBlock;

const footerBlockStyle = { textAlign: "center" };
