import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  APP_INIT_ERROR, APP_READY, subscribe, initialize,
} from '@edx/frontend-platform';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'
import Header from '@edx/frontend-component-header';
// import FooterSlot from '@openedx/frontend-slot-footer';
import messages from './i18n';
import ExamplePage from './example/ExamplePage';

import './index.scss';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <ChakraProvider>
        <Header />
        <ExamplePage />
        {/* <FooterSlot /> */}
      </ChakraProvider>
    </AppProvider>,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages,
});