import { useStoreActions } from "easy-peasy";
import { Route, Routes } from "react-router-dom";
import MenuAppBar from "../src/component/appbar";
import HomePage from "./page/homePage";
import PageNotFound from "./page/pageNotFound";
import PlayerPage from "./page/playerPage";



const App = () => {
    const action = useStoreActions((action) => action.playlist)
    const submitid = (id) => {
        action.getPlaylist(id)
    }

    return (
        <div>
            <MenuAppBar submitid={submitid} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/player/:playlistId" element={<PlayerPage />} />
                <Route path="*" element={<PageNotFound />} />

            </Routes>
        </div>
    )
}
export default App;