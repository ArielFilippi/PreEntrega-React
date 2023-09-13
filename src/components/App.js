import "bulma/css/bulma.css";
import NavBar from "./NavBar/NavBar";
import ProfileCard from "./ProfielCard/ProfileCard";
import { ItemListContainer } from "./ItemList/ItemListContainer";


function App() {
    return (
        <>
            <NavBar/>
            <ItemListContainer/>
            <ProfileCard/>
        </>
    )
}

export default App;