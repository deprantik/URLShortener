import React, { useState } from 'react';
import Link from 'next/link';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { Button, Input, Spacer, UrlListing } from '../Components';

const HomePage = () => {
	const [shortUrl, setShortUrl] = useState(null);
	const [active, setActive] = useState(false);
	const handleSubmit = () => {
		if (typeof window !== undefined) {
			const href = window.location.href;
			fetch(`/api/save-redirection?httpUrl=${href}`)
				.then(response => response.json())
				.then(response => {
					if (response.status === 'SUCCESS' && response.data.fromUrl) {
						setShortUrl(response.data.fromUrl);
						if (response.data.isActive) {
							setActive(true);
						}
					}
				})
				.catch((err) => {
					console.log("Error", err.message);
				});
		}
	}
	return (
		<div>
			<Spacer height={2} />
			<Grid>
				<Row>
					<Col xs={9}>
						<Input
							name={'longUrl'}
							type="url"
							placeholder="Please enter the original Url"
							required
						/>
					</Col>
					<Col xs={3}>
						<Button onClick={handleSubmit}>
							Submit
						</Button>
					</Col>
					<Spacer height={2} />
					{shortUrl &&
						<Col>
							<span><b>Shortened URL:</b> &nbsp;</span>
							{active ?
								<Link href={shortUrl} target={'_blank'}>
									{shortUrl}
								</Link>
							:
								shortUrl
							}
						</Col>
					}
				</Row>
				<Spacer height={5} />
				<UrlListing />
			</Grid>
		</div>
	);
};

export default HomePage;