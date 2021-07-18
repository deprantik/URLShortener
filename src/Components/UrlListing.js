import React, { PropTypes } from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import Spacer from './Spacer';

const ColumnName = styled.div`
	color: #012169;
	font-size: 1.25rem;

`;

const CustomCol = styled(Col)`
	border-right: ${props => !props.noBorder && '1px solid rgba(0,0,0, 0.5)'};
	text-align: center;
`;

const ListItem = styled.div`
	width:100%;
	white-space: nowrap;
	overflow-x: auto;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const UrlListing = (props) => {
	return (
		<Row>
			<Col xs={12}>
				<h2>List of all the urls</h2>
			</Col>
			<Col xs={12}>
				<Row center="xs">
					<CustomCol xs={1}>
						<ColumnName>Order</ColumnName>
					</CustomCol>
					<CustomCol xs={4}>
						<ColumnName>Short URL</ColumnName>
					</CustomCol>
					<CustomCol xs={5}>
						<ColumnName>Original URL</ColumnName>
					</CustomCol>
					<CustomCol xs={2} noBorder>
						<ColumnName>Usage</ColumnName>
					</CustomCol>
				</Row>
				<Spacer />
				<Row>
					<CustomCol xs={1} noBorder>
						<ListItem>1</ListItem>
					</CustomCol>
					<CustomCol xs={4} noBorder>
						<ListItem>http://localhost:5000/cdbka386ih</ListItem>
					</CustomCol>
					<CustomCol xs={5} noBorder>
						<ListItem>http://exabple.com/adckavuy/ckbwvbciuwyg/cibuwcwgidevidgqiygbiqdgqidq</ListItem>
					</CustomCol>
					<CustomCol xs={2} noBorder>
						<ListItem>20</ListItem>
					</CustomCol>
				</Row>
			</Col>
		</Row>
	);
};

// UrlListing.propTypes = {

// };

export default UrlListing;