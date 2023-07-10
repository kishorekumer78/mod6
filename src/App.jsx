import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
    return (
        <div className="h-screen w-10/12 mx-auto  flex flex-col shadow-xl">
            <Header title="React Application Practice With Tailwind CSS"/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default App
