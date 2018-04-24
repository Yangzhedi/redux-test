import React from 'react';
import { BackTop, Anchor } from 'antd';
// import LeanReact from './LeanReact'

import Bundle from '../../Bundle'


const { Link } = Anchor;


const LeanReact = (props) => (
    <Bundle load={() => import('./LeanReact')}>
        {(LeanReact) => <LeanReact {...props}/>}
    </Bundle>
);

export default class CodeGuide extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
        this.scrollToAnchor = this.scrollToAnchor.bind(this)
    }

    componentWillMount() {
        document.title = 'React编码规范';
    }

    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) { anchorElement.scrollIntoView(); }
        }
    }

    render() {
        return (
            <div>
                <p>Airbnb React编码规范</p>
                <div className="content">
                    <BackTop />
                    <div className="main">
                        <LeanReact />
                    </div>
                    <div className="left">
                        <Anchor>
                            <Link href="#Basic-Rules" title="基本规则" />
                            <Link href="#Class" title="createClass" />
                            <Link href="#Mixins" title="Mixins" />
                            <Link href="#Naming" title="命名" >
                                <Link href="#Reference-Naming" title="引用命名" />
                                <Link href="#Component-Naming" title="组件命名" />
                                <Link href="#Higher-order-component-Naming" title="高阶组件命名" />
                                <Link href="#Props-Naming" title="属性命名" />
                            </Link>
                            <Link href="#Declaration" title="声明" />
                            <Link href="#Alignment" title="对齐" />
                            <Link href="#Quotes" title="引号" />
                            <Link href="#Spacing" title="空格" />
                            <Link href="#Refs" title="Refs" />
                            <Link href="#Props" title="属性" />
                            <Link href="#Parentheses" title="括号" />
                            <Link href="#Tags" title="标签" />
                            <Link href="#Methods" title="方法" />
                            <Link href="#Ordering" title="顺序" />

                        </Anchor>
                    </div>
                </div>

            </div>

        );
    }
}