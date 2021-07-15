import React, { Suspense } from 'react'
import Header from '@components/Header/Header'
const Footer = React.lazy(() => import('@components/Footer/Footer'))
import Button from './components/Button/Button'
import jpeg from '@assets/img/map.jpg'
import svg from '@assets/svg/inst.svg'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="promo">
          <div className="wrapper">
            <div className="promo__container">
              <h1>This is React-Start-Template</h1>
              <Button outlined>Button</Button>
            </div>
            <img src={jpeg} alt="jpeg" loading="lazy" />
          </div>
        </section>
      </main>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
