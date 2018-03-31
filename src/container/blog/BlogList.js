import React from 'react';


export default class BlogList extends React.Component {


    componentWillMount() {
        document.title = '博客列表';
    }

    render() {
        return (
            <div className="container">BlogList</div>
        );
    }
}