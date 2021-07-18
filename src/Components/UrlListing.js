import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import Spacer from './Spacer';
import { connect } from 'react-redux';
import { store } from '../redux/configureStore';
import { fetchAllRedirectionData } from '../redux/redirectionAction';

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
`;

const UrlListing = (props) => {
	const [ping, setPing] = useState(false);
	useEffect(() => {
		if (!ping) {
			store.dispatch(fetchAllRedirectionData());
			setPing(true);
		}
	});

	const { data } = props.redirectionData;
	return (
		<Row>
			<Col xs={12}>
				<h2>List of all the urls</h2>
			</Col>
			<Spacer />
			{data && data.length ?
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
					<Spacer height={1.5} />
					{data.map((item, index) => {
						return (
							<Row>
								<CustomCol xs={1} noBorder>
									<ListItem>{index+1}</ListItem>
								</CustomCol>
								<CustomCol xs={4} noBorder>
									<ListItem>{item.fromUrl}</ListItem>
								</CustomCol>
								<CustomCol xs={5} noBorder>
									<ListItem>{item.toUrl}</ListItem>
								</CustomCol>
								<CustomCol xs={2} noBorder>
									<ListItem>{item.hit}</ListItem>
								</CustomCol>
								<Spacer />
							</Row>
						)
					})}
				</Col>
			:
				<Col>Sorry, there is no data available</Col>}
		</Row>
	);
};

// UrlListing.propTypes = {

// };

const mapStateToProps = (redirectionData) => ({
	redirectionData
  })
  
export default connect(mapStateToProps, {
	fetchAllRedirectionData
})(UrlListing);