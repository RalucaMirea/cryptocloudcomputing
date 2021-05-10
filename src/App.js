import "./App.css";
import Box from '@material-ui/core/Box';
import News from './Components/News.js';
import CryptoDetails from './Components/CryptoDetails.js';

function App() {
  return (
    <div style={{ width: '100%' }}>
      <Box display="flex" p={1} bgcolor="background.paper">
        <Box p={1} flexGrow={1} bgcolor="grey.300">
           <News/>
        </Box>
        <Box p={1} bgcolor="grey.300">
          <CryptoDetails/>
        </Box>
        </Box>
    </div>
  );
}

export default App;
