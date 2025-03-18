
import Cricket from '../Games/cricket';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cricket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App