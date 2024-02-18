import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import theme from '~/theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ConfirmProvider } from 'material-ui-confirm'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfirmProvider
      defaultOptions={{
        allowClose: false,
        dialogProps: {
          maxWidth: 'xs'
        },
        buttonOrder: ['confirm', 'cancel'],
        cancelationButtonProps: { color: 'inherit' },
        confirmationButtonProps: { color: 'secondary', variant: 'outlined' }
      }}
    >
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <App />
        <ToastContainer position="bottom-left" theme="colored" />
      </CssVarsProvider>
    </ConfirmProvider>
  </React.StrictMode>
)
