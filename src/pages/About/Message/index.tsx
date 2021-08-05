import React from 'react';
import {Link, Route} from "react-router-dom";
import Info from "./Info";

function Message(props:any) {
    const state = {
        person: [
            {id: 1, name: 'bob'},
            {id: 2, name: 'zhangfei'},
            {id: 3, name: 'guanyu'},
        ]
    }

    const paramsPush = (id:number,name:string) => {
        props.history.push(`/about/message/info/${id}/${name}`)
    }
    const paramsReplace = (id:number,name:string) => {
        props.history.replace(`/about/message/info/${id}/${name}`)
    }
    return (
        <div className="App">
            {
                state.person.map((obj) => {
                    return (
                        //params传递参数
                        // <Link key={obj.id} replace to={`/about/message/info/${obj.id}/${obj.name}`}>message001</Link>
                        //search传递参数
                        // <Link key={obj.id} replace to={`/about/message/info?id=${obj.id}&name=${obj.name}`}>message001</Link>
                        //state传递参数
                        <>
                            <Link key={obj.id} replace to={{
                                pathname: '/about/message/info',
                                state: {id: obj.id, name: obj.name}
                            }}>message001</Link>
                            <button key={obj.name} onClick={() => {paramsPush(obj.id,obj.name)}}>push</button>
                            {/*<button key={1} onClick={() => {paramsReplace(obj.id,obj.name)}}>replace</button>*/}
                        </>
                    )
                })
            }
            {/*params 接收参数*/}
            <Route path={'/about/message/info/:id/:name'} component={Info}></Route>
            {/*search  和   state  接收参数*/}
            {/*<Route path={'/about/message/info'} component={Info}></Route>*/}
        </div>
    );
}

export default Message;
