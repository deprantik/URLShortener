import App from 'next/app';
import Head from 'next/Head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from '../Components';
import GlobalStyle from '../GlobalStyles';
import { Provider as ReduxProvider } from 'react-redux';
import theme from '../utils/theme';
import { wrapper, store } from '../redux/configureStore';

class NextApp extends App {

	render() {
		const { Component } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<ReduxProvider store={store}>
					<Head>
						<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
						<title>URL Shortener</title>
					</Head>
					<GlobalStyle />
					<Header />
					<Component />
				</ReduxProvider>
			</ThemeProvider>
		);
	}
}

export default wrapper.withRedux(NextApp);
