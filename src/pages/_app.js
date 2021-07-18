import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from '../Components';
import GlobalStyle from '../GlobalStyles';
// import { Provider as ReduxProvider } from 'react-redux';
import theme from '../utils/theme';
// import { wrapper, store } from '../redux/configureStore';

class NextApp extends App {

	render() {
		const { Component } = this.props;

		return (
			<ThemeProvider theme={theme}>
				{/* <ReduxProvider store={store}> */}
				{/* <ReduxProvider> */}
					<GlobalStyle />
					<Header />
					<Component />
				{/* </ReduxProvider> */}
			</ThemeProvider>
		);
	}
}

export default NextApp;

// export default wrapper.withRedux(NextApp);
