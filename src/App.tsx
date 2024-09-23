import { useState } from 'react'
import { Container } from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css';

import { HeaderFunc } from './components/HeaderComp'
import { Header } from './components/HeaderComp'
import { CardInterface } from './components/CardComp';
import { Card } from './components/CardComp';

<style>



</style>



let asd: Header = {
  name: "Varga Dávid",
  content: "Szoftverfejlesztő"
}



let leftCard: CardInterface = {
  cardTitle: "Személyes adatok",
  cardContent: "lorem impsum :DDDD",
  cardFooter: "footer"
}


let rightCard: CardInterface = {
  cardTitle: "Tanulmányok",
  cardContent: "lorem impsum tanulmányok :DDDD",
  cardFooter: "jobbfooter"
}

let TapasztalatCard: CardInterface = {
  cardTitle: "Tapasztalat",
  cardContent: "lorem impsum tapasztalat :DDDD",
  cardFooter: "jobbfooter"
}

let HobbikCard: CardInterface = {
  cardTitle: "Hobbik",
  cardContent: "lorem impsum hobbik :DDDD",
  cardFooter: "hobbifooter"
}



function App() {


  return (

    <>

      <div className="container-fluid bg-light">
        <header>{HeaderFunc(asd)} </header>
      </div>


      <div className='container'>
        <main>
          <div className='row'>

            <div className='col-sm-6'>
              {Card(leftCard)}
            </div>

            <div className='col-sm-6'>
              {Card(rightCard)}
            </div>
          </div>


          <div className='row' >

            <div className='col-sm-12'>
              {Card(TapasztalatCard)}
            </div>


          </div>

          <div className='row' >

            <div className='col-sm-12'>
              {Card(HobbikCard)}
            </div>


          </div>

        </main>
      </div>



      <footer className='container-fluid mb-0 bg-light' style={{borderRadius: '5px'}}><p style={{marginBottom: '0px'}}>Varga Dávid --</p></footer>



    </>





  )
}

export default App
