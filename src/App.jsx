import Home from './Home'
import FloatingLines from './components/Background_FloatingLines';
import { GridScan } from "./components/Background_GridScan";
import RippleGrid from './components/Background_RippleGrid';
function App() {
  return(
    <>
    <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1
  }}>
    
  <GridScan
    sensitivity={0.55}
    lineThickness={1}
    linesColor= 'rgb(201, 180, 255)'
    gridScale={0.1}
    scanColor="#9fffef"
    scanOpacity={0.4}
    enablePost
    bloomIntensity={1}
    chromaticAberration={0.0} 
    noiseIntensity={0.0}
    lineJitter={0}
    scanDirection='backward'
  />

</div>
   <Home />
   </>
  )
}

export default App
