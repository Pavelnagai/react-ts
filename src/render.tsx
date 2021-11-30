import './index.css';
import {BrowserRouter} from "react-router-dom";
import {addPost, RootStateType, updatePostText} from "./redux/state";
import App from "./App";
import ReactDOM from 'react-dom';


const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updatePostText={updatePostText}/>
        </BrowserRouter>,
        document.getElementById('root'));
}
export default rerenderEntireTree