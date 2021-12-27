import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Equipment from "./pages/Equipment";
import Information from "./pages/Information";
import News from "./pages/News";
import Contacts from "./pages/Contacts";

const Main = styled.main`
	width: 1240px;
  	margin: auto;

	@media (max-width: 1300px) {
		width: 850px;
	}

	@media (max-width: 900px) {
		width: 650px;
	}

	@media (max-width: 700px) {
		width: 320px;
	}
`;

function App() {
  return (
    <BrowserRouter>
		<Header />
		<Main>
			<Routes>
				<Route path="/" element={<Products/>}/>
				<Route path="/services" element={<Services/>}/>
				<Route path="/equipment" element={<Equipment/>}/>
				<Route path="/information" element={<Information/>}/>
				<Route path="/news" element={<News/>}/>
				<Route path="/contacts" element={<Contacts/>}/>
			</Routes>
		</Main>
		<Footer />
    </BrowserRouter>
  );
}

export default App;
