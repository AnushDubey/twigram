import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase'
import firebase from 'firebase'

function MessageSender() {
    const [{ user }, dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!input) {
            alert("Please enter something!");
        }
        else{
            alert("Posted!");
            db.collection('posts').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profilePic: user.photoURL,
                username: user.displayName,
                image: imageUrl
            })
    
    
            setInput('')
            setImageUrl('')
        }
        
    }
    return (
        <div className="messageSender">
            <div class="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)}
                        placeholder={`Hey ${user.displayName.split(' ')[0]}, post something!`} />

                    <input placeholder="URL-images/gif/videos (optional) " value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

                    <Button type="submit" title="Click or simply hit enter!" onClick={handleSubmit}>Post It!</Button>
                </form>
            </div>
            <div class="messageSender__bottom">
                
                <div class="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div class="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div class="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "blue" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
