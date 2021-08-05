import React, {Component} from 'react';
// import qs from 'querystring'

class Info extends Component<any, any> {
    state = {
        personInfoArr: [
            {id: 1, content: '你好'},
            {id: 2, content: '哈哈'},
            {id: 3, content: '🐂啊'},
        ]
    }

    render() {
        //params
        // const {match: {params: {id, name}}} = this.props

        //search
        // const {location: {search}} = this.props
        // const {id, name} = qs.parse(search.slice(1))

        //state
        const {id, name} = this.props.location.state || {}
        const text = this.state.personInfoArr.find((obj) => {
               return obj.id === Number(id)
        }) || { content: ''}
        return (
            <div className="App">
                <p>Id:{id}</p>
                <p>name:{name}</p>
                <p>content:{text.content}</p>
            </div>
        );
    }
}

export default Info;
