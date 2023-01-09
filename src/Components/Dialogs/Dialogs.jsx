import App from "../../App";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

function Messages(props) {
    return (
        <div className={s.messages}>{props.textMsg}</div>
    )
}

function Dialogs() {
    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Nikita'},
        {id: 4, name: 'Anton'},
        {id: 5, name: 'Sergey'},
        {id: 6, name: 'Alexandr'},
        {id: 7, name: 'Alena'},
    ];
    let messagesData = [
        {id: 1, textMsg: 'Hi Artem'},
        {id: 2, textMsg: 'Stavropol Soldatka Shirokaya street'},
        {id: 3, textMsg: 'From Russia with love'},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
                <DialogItem name={dialogsData[6].name} id={dialogsData[6].id}/>
            </div>
            <div className="allMsgs">
                <Messages textMsg={messagesData[0].textMsg}/>
                <Messages textMsg={messagesData[1].textMsg}/>
                <Messages textMsg={messagesData[2].textMsg}/>
            </div>

        </div>
    )
}

export default Dialogs;