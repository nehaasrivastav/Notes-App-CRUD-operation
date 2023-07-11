import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateNote } from "../Redux/action";
export default function Updateform(props) {
    const dispatch = useDispatch();
    let getTitle = useRef("");
    let getMessage = useRef("");
    function handleUpdate(e) {
        e.preventDefault();
        const newTitle = getTitle.value;
        const newMessage = getMessage.value;
        const data = {
            newTitle,
            newMessage,
        };

        dispatch(updateNote(props.index, data));
    }
    return (
        <>
            <div className="card-update" id="form2">
                <form onSubmit={handleUpdate}>
                    Title  <br />
                    <input
                        required
                        type="text"
                        className="fillbox-1"
                        ref={(input) => (getTitle = input)}
                        defaultValue={props.note.title}
                        placeholder="Enter Note Title"
                    />
                    <br />
                    <br />
                    Content  <br />
                    <textarea
                        required
                        className="fillbox"
                        rows="6"
                        cols="44"
                        ref={(input) => (getMessage = input)}
                        defaultValue={props.note.content}
                        placeholder="Enter Note"
                    />
                    <br />
                    <br />
                    <button className="button-31">Update</button>
                </form>
            </div>
        </>
    );
}
