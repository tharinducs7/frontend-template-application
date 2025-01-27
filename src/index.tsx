import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  APP_INIT_ERROR,
  APP_READY,
  subscribe,
  initialize,
} from '@edx/frontend-platform';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from the new package
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@edx/frontend-component-header';
// import FooterSlot from '@openedx/frontend-slot-footer';
// @ts-ignore
import messages from './i18n';
// @ts-ignore
import ExamplePage from './example/ExamplePage';

import './index.scss';

// Ensure TypeScript recognizes the 'root' element
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

// Create the React root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Subscribe to APP_READY
subscribe(APP_READY, () => {
  root.render(
    <AppProvider>
      <ChakraProvider>
        <Header />
        <ExamplePage />
        {/* <FooterSlot /> */}
      </ChakraProvider>
    </AppProvider>,
  );
});

// Subscribe to APP_INIT_ERROR
subscribe(APP_INIT_ERROR, (error: { message: string }) => {
  root.render(<ErrorPage message={error.message} />);
});

// Initialize the app
initialize({
  messages,
});
