import Home from './Home'
import FloatingLines from './components/Background_FloatingLines';
function App() {
  return(
    <>
    <div style={{ width: '100%', position: 'sticky', zIndex:'-1' }}>

  <FloatingLines 

    enabledWaves={['top', 'middle', 'bottom']}

    // Array - specify line count per wave; Number - same count for all waves

    lineCount={[10, 15, 20]}

    // Array - specify line distance per wave; Number - same distance for all waves

    lineDistance={[80, 80, 80]}

    bendRadius={5.0}

    bendStrength={-0.5}

    interactive={false}

    parallax={false}
    
  />
</div>
   <Home />
   </>
  )
}

export default App
