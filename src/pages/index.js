import React, { useState } from 'react';
import Link from 'next/link';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { Button, Input, Spacer, UrlListing } from '../Components';

const HomePage = () => {
	const [shortUrl, setShortUrl] = useState(null);
	const [active, setActive] = useState(false);
	const [originalUrl, setOriginalURL] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		if (typeof window !== undefined) {
			const href = originalUrl;
			fetch(`/api/save-redirection?httpUrl=${href}`, { method: 'POST' })
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
				<form onSubmit={handleSubmit}>
					<Row>
						<Col xs={9}>
							<Input
								name={'longUrl'}
								type="url"
								onChange={(e) => setOriginalURL(e.target.value)}
								value={originalUrl}
								placeholder="Please enter the original Url"
								required
							/>
						</Col>
						<Col xs={3}>
							<Button>
								Submit
							</Button>
						</Col>
					</Row>
				</form>
				<Row>
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