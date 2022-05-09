import { Suspense } from 'react'
import './styles/global.css'
import { useRoutes } from 'react-router-dom'
import routes from '~pages'
import { registerSW } from 'virtual:pwa-register'

export default function App() {
    registerSW({ immediate: true })
    return (
        <Suspense
            fallback={
                <>
                    <p>Loading...</p>
                </>
            }
        >
            <main>{useRoutes(routes)}</main>
        </Suspense>
    )
}
