
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { IntegrationAppProvider } from '@integration-app/react'
import { App } from './App.tsx'

import './index.css'
import '@integration-app/react/styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntegrationAppProvider>
      <App />
    </IntegrationAppProvider>
  </StrictMode>,
)
