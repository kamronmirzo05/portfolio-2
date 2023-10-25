import { useState } from 'react';
import { springyEmojiCursor, ghostCursor, textFlag, fairyDustCursor } from "cursor-effects";
export default function Design() {



    const [mode, setMode] = useState(localStorage.getItem("mode"))
    function change(e) {
        localStorage.setItem('mode', e);
        window.location.reload();
    }
    if (mode == 'fairyDustCursor') {
        new fairyDustCursor({ colors: ["red", "blue"] })
    } else if (mode == 'textFlag') {
        new textFlag({ text: ["Khojiakbarbek"], color: ["red", "blue"] })
    } if (mode == 'ghostCursor') {
        new ghostCursor()
    } else if (mode == 'springyEmojiCursor') {
        new springyEmojiCursor()
    }

    return (
        <div className="designDiv">
            <div class="card">
                Khojiakbarbek
            </div>

            <div className="mt-5">
                <button className='btn btn-danger m-2' onClick={() => change('fairyDustCursor')}>fairyDustCursor</button>
                <button className='btn btn-danger m-2' onClick={() => change('textFlag')}>Text Flag</button>
                <button className='btn btn-danger m-2' onClick={() => change('ghostCursor')}>Ghost Cursor</button>
                <button className='btn btn-danger m-2' onClick={() => change('springyEmojiCursor')}>Emoji Cursor</button>
            </div>

        </div>
    )
}