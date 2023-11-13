import React from 'react';
import './Notification.css';
import {getLatestNotification} from "./utils"

const Notifications = () => {
        return (
            <div className='Notifications'> 
            <button type="button" style="float: right;" aria-label="Close" onclick="console.log('Close button has been clicked')" img src="close-icon.png"></button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li
                  data="urgent"
                  dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
                ></li>
            </ul>
            </div>
        )
}

export default Notifications;
