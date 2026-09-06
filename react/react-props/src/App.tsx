import Box from './components/Box'

function App() {

  return (
    <>
      <h1>React props</h1>
      <Box 
        titleBox='Titoli box' 
        subTitleBox='Sub titolo box'
        textBox="Il vento d'autunno accarezza la cima degli alberi secolari,
                  mentre le foglie dorate iniziano la loro lenta danza verso il suolo.
                  La foresta si prepara in silenzio al lungo sonno invernale,
                  avvolta in un'atmosfera di quiete e malinconica bellezza." 
        colorTitle="red"
        />
      <Box 
        titleBox='Titoli box 2' 
        subTitleBox='Sub titolo box 2' 
        textBox="L'evoluzione dell'intelligenza artificiale sta ridisegnando il domani,
                  creando nuove sinergie tra la mente umana e gli algoritmi digitali.
                  Ogni linea di codice apre porte verso mondi prima inimmaginabili,
                  trasformando la complessità dei dati in soluzioni semplici e immediate." 
        className='box2'
        colorTitle="blue" 
      />
      <Box 
        titleBox='Titoli box 3' 
        subTitleBox='Sub titolo box 3' 
        textBox="Il vecchio capitano guardò l'orizzonte mentre la tempesta sbiadiva,
                  consapevole che la mappa tra le sue mani nascondeva un segreto immenso.
                  La nave, seppur ferita dalle onde, continuava la sua corsa fiera,
                  diretta verso quell'isola misteriosa che nessun uomo aveva mai mappato." 
        className='box3'
        colorTitle='purple'
      />
    </>
  )
}

export default App
