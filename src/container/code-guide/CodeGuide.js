import React from 'react';
import { BackTop, Anchor } from 'antd';
const { Link } = Anchor;

export default class CodeGuide extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
        this.scrollToAnchor = this.scrollToAnchor.bind(this)
    }

    componentWillMount() {
        document.title = 'CodeGuide';
    }

    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) { anchorElement.scrollIntoView(); }
        }
    }

    render() {
        return (

            <div className="content">
                <BackTop />
                <div className="main">
                    <p style={{height:300}} id="1">ponents-anchor-demo-bas</p>
                    <p style={{height:300}} id="2">components-anchor-demo-fixed</p>
                    <p style={{height:300}} id="3">API</p>
                    <p style={{height:300}} id="4">Link-Props</p>
                    <p style={{height:300}} id="5">Link-Props</p>
                    <p style={{height:300}} id="6">Link-Props</p>
                    <p style={{height:300}} id="7">Link-Props</p>
                    <p style={{height:300}} id="8">Link-Props</p>
                    <p style={{height:300}} id="9">Link-Props</p>
                    <p style={{height:300}} id="10">Link-Props</p>
                    <p style={{height:300}} id="11">Link-Props</p>
                    <p style={{height:300}} id="12">Link-Props</p>
                    <p style={{height:300}} id="13">Link-Props</p>
                </div>
                <div className="left">
                    <Anchor>
                        <Link href="#1" title="Basic demo" />
                        <Link href="#2" title="Fixed demo" />
                        <Link href="#3" title="API">
                            <Link href="#4" title="Anchor Props" />
                            <Link href="#5" title="Link Props" />
                        </Link>
                        <Link href="#6" title="Fixed demo" />
                        <Link href="#7" title="API">
                            <Link href="#8" title="Anchor Props" />
                            <Link href="#9" title="Link Props" />
                        </Link>
                        <Link href="#10" title="Fixed demo" />
                        <Link href="#11" title="API">
                            <Link href="#12" title="Anchor Props" />
                            <Link href="#13" title="Link Props" />
                        </Link>
                    </Anchor>
                </div>
            </div>

        );
    }
}