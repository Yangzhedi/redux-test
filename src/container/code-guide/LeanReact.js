import React from 'react';

export default function LeanReact() {
    let classCode1 = '<pre><code><div><code>// bad<br/>const Listing = React.createClass({<br/>  // ...<br/>  render() {<br/>    return &lt;div&gt;{this.state.hello}&lt;/div&gt;;<br/>  }<br/>});<br/><br/>// good<br/>class Listing extends React.Component {<br/>  // ...<br/>  render() {<br/>    return &lt;div&gt;{this.state.hello}&lt;/div&gt;;<br/>  }<br/>}</code></div></code></pre>'
    let classCode2 = '<pre><code><div>// bad</div></code><code><div>class Listing extends React.Component {</div></code><code><div>  render() {</div></code><code><div>    return &lt;div&gt;{this.props.hello}&lt;/div&gt;;</div></code><code><div>  }</div></code><code><div>}</div></code><code><div><br></div></code><code><div>// bad (因为箭头函数没有“name”属性)</div></code><code><div>const Listing = ({ hello }) =&gt; (</div></code><code><div>  &lt;div&gt;{hello}&lt;/div&gt;</div></code><code><div>);</div></code><code><div><br></div></code><code><div>// good</div></code><code><div>function Listing({ hello }) {</div></code><code><div>  return &lt;div&gt;{hello}&lt;/div&gt;;</div></code><code><div>}</div></code></pre>'
    let namingCode1 = '<pre><code><div>// bad</div></code><code><div>import reservationCard from &#x27;./ReservationCard&#x27;;</div></code><code><div><br></div></code><code><div>// good</div></code><code><div>import ReservationCard from &#x27;./ReservationCard&#x27;;</div></code><code><div><br></div></code><code><div>// bad</div></code><code><div>const ReservationItem = &lt;ReservationCard /&gt;;</div></code><code><div><br></div></code><code><div>// good</div></code><code><div>const reservationItem = &lt;ReservationCard /&gt;;</div></code></pre>'
    let namingCode2 = '<pre><code><div><span style="color:#6a737d">// bad</span><br/><span style="color:#d73a49">import</span><span style="color:#24292e"> Footer</span><span style="color:#d73a49"> from</span> <span style="color:#032f62">&#x27;./Footer/Footer&#x27;</span>;<br/><br/><span style="color:#6a737d">// bad</span><br/><span style="color:#d73a49">import</span><span style="color:#24292e"> Footer</span><span style="color:#d73a49"> from</span> <span style="color:#032f62">&#x27;./Footer/index&#x27;</span>;<br/><br/><span style="color:#6a737d">// good</span><br/><span style="color:#d73a49">import</span><span style="color:#24292e"> Footer</span><span style="color:#d73a49"> from</span> <span style="color:#032f62">&#x27;./Footer&#x27;</span>;</div></code></pre>'
    let namingCode3 = '<pre><code><div><span style="color:#6a737d">// bad</span><br/><span style="color:#d73a49">export default</span> <span style="color:#d73a49">function</span> <span style="color:#6f42c1">withFoo</span>(<span style="color:#24292e">WrappedComponent</span>) {<br/><span style="color:#d73a49">  return</span> <span style="color:#d73a49">function</span> <span style="color:#6f42c1">WithFoo</span>(<span style="color:#24292e">props</span>) {<br/><span style="color:#d73a49">    return</span> &lt;<span style="color:#22863a"><span style="color:#005cc5">WrappedComponent</span></span> {<span style="color:#d73a49">...</span><span style="color:#24292e">props</span>} <span style="color:#6f42c1">foo</span> /&gt;;<br/>  }<br/>}<br/><br/><span style="color:#6a737d">// good</span><br/><span style="color:#d73a49">export default</span> <span style="color:#d73a49">function</span> <span style="color:#6f42c1">withFoo</span>(<span style="color:#24292e">WrappedComponent</span>) {<br/>  <span style="color:#d73a49">function</span> <span style="color:#6f42c1">WithFoo</span>(<span style="color:#24292e">props</span>) {<br/><span style="color:#d73a49">    return</span> &lt;<span style="color:#22863a"><span style="color:#005cc5">WrappedComponent</span></span> {<span style="color:#d73a49">...</span><span style="color:#24292e">props</span>} <span style="color:#6f42c1">foo</span> /&gt;;<br/>  }<br/><br/>  <span style="color:#d73a49">const</span> <span style="color:#24292e">wrappedComponentName</span><span style="color:#d73a49"> =</span> <span style="color:#24292e">WrappedComponent</span><span style="color:#d73a49">.</span><span style="color:#24292e">displayName</span><br/><span style="color:#d73a49">    ||</span> <span style="color:#24292e">WrappedComponent</span><span style="color:#d73a49">.</span><span style="color:#24292e">name</span><br/><span style="color:#d73a49">    ||</span> <span style="color:#032f62">&#x27;Component&#x27;</span>;<br/><br/>  <span style="color:#24292e">WithFoo</span><span style="color:#d73a49">.</span><span style="color:#24292e">displayName</span><span style="color:#d73a49"> =</span><span style="color:#032f62"> &#x60;withFoo(<span style="color:#6f42c1">${<span style="color:#24292e">wrappedComponentName</span>}</span>)&#x60;</span>;<br/><span style="color:#d73a49">  return</span><span style="color:#24292e"> WithFoo</span>;<br/>}</div></code></pre>'
    let namingCode4 = '<pre><code><div><span style="color:#6a737d">// bad</span><br/>&lt;<span style="color:#22863a"><span style="color:#005cc5">MyComponent</span></span> <span style="color:#6f42c1">style</span><span style="color:#d73a49">=</span><span style="color:#032f62">&quot;fancy&quot;</span> /&gt;<br/><br/><span style="color:#6a737d">// bad</span><br/>&lt;<span style="color:#22863a"><span style="color:#005cc5">MyComponent</span></span> <span style="color:#6f42c1">className</span><span style="color:#d73a49">=</span><span style="color:#032f62">&quot;fancy&quot;</span> /&gt;<br/><br/><span style="color:#6a737d">// good</span><br/>&lt;<span style="color:#22863a"><span style="color:#005cc5">MyComponent</span></span> <span style="color:#6f42c1">variant</span><span style="color:#d73a49">=</span><span style="color:#032f62">&quot;fancy&quot;</span> /&gt;</div></code></pre>';
    let declarationCode = '<pre><code><div><span style="color:#6a737d">// bad</span><br/><span style="color:#d73a49">export default</span> <span style="color:#24292e">React</span><span style="color:#d73a49">.</span><span style="color:#6f42c1">createClass</span>({<br/><span style="color:#005cc5">  <span style="color:#032f62">displayName</span>:</span> <span style="color:#032f62">&#x27;ReservationCard&#x27;</span>,<br/><span style="color:#6a737d">  // stuff goes here</span><br/>});<br/><br/><span style="color:#6a737d">// good</span><br/><span style="color:#d73a49">export default</span> <span style="color:#d73a49">class</span> <span style="color:#6f42c1">ReservationCard</span> <span style="color:#d73a49">extends</span> <span style="color:#6f42c1">React</span><span style="color:#d73a49">.</span><span style="color:#24292e">Component</span> {<br/>}</div></code></pre>'
    return (
        <div>
            <h2 style={{textAlign:'start'}} id="Basic-Rules">基本规则<br/></h2>
            <ul><li>每个文件只包含一个React组件；</li>
                <ul><li>但是<a href="https://reactjs.org/docs/components-and-props.html#stateless-functions" target="_blank">无状态, 或者 Pure 组件</a> 允许一个文件包含多个组件。eslint: <code><a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless" target="_blank">react/no-multi-comp</a></code>.
                </li>
                </ul>
                <li>始终使用 JSX 语法;</li>
                <li>不要使用 <code>React.createElement</code>方法，除非初始化 app 的文件不是 JSX 格式。</li>
            </ul>

            <h2 style={{textAlign:'start'}} id="Class">Class vs <code>React.createClass</code> vs stateless</h2>
            <ul><li>如果组件拥有内部的 state 或者 refs 的时，更推荐使用 <code>class extends React.Component</code>，除非你有一个非常好的理由要使用 mixin。 eslint:
                <code><a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md" target="_blank">react/prefer-es6-class</a></code>&nbsp;
                <code><a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md" target="_blank">react/prefer-stateless-function</a></code>
                </li>
            </ul>
            <div dangerouslySetInnerHTML={{__html: classCode1}}/>
            <p>如果没有组件没有内部 state 或者 refs，那么普通函数 (不要使用箭头函数) 比类的写法更好：</p>
            <div dangerouslySetInnerHTML={{__html: classCode2}}/>

            <h2 style={{textAlign:'start'}} id="Mixins">Mixins</h2>
            <ul><li> <a href="https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html" target="_blank">弃用mixins.</a></li></ul>
            <blockquote>Why? Mixins introduce implicit dependencies, cause name clashes, and cause snowballing complexity. Most use cases for mixins can be accomplished in better ways via components, higher-order components, or utility modules.</blockquote>

            <h2 style={{textAlign:'start'}} id="Naming">命名</h2>
            <ul>
                <li><strong>扩展名</strong>：React 组件使用<code>.jsx</code>扩展名；</li>
                <li><strong>文件名</strong>：文件名使用帕斯卡命名。 例如： ReservationCard.jsx。</li>
                <li id="Reference-Naming"><strong>引用命名</strong>：React 组件使用帕斯卡命名，引用实例采用驼峰命名。 eslint:
                    <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md" target="_blank">react/jsx-pascal-case</a>
                </li>
            </ul>
            <div dangerouslySetInnerHTML={{__html: namingCode1}}/>
            <ul><li id="Component-Naming"><strong>组件命名</strong>：组件名称应该和文件名一致， 例如： ReservationCard.jsx 应该有一个ReservationCard的引用名称。 但是， 如果是在目录中的组件， 应该使用 index.jsx 作为文件名 并且使用文件夹名称作为组件名：</li></ul>
            <div dangerouslySetInnerHTML={{__html: namingCode2}}/>
            <ul><li id="Higher-order-component-Naming"><strong>高阶组件命名</strong>：使用高阶组件名+传入组件名的组合来命名生成器组件的displayName。例如，使用Foo()的高阶组件在传递组件Bar时应该生成一个displayName为withFoo(Bar)的组件。</li></ul>
            <blockquote> Why? A component's displayName may be used by developer tools or in error messages, and having a value that clearly expresses this relationship helps people understand what is happening.</blockquote>
            <div dangerouslySetInnerHTML={{__html: namingCode3}}/>
            <ul><li id="Props-Naming"><strong>属性命名</strong>：不要与DOM本身的属性冲突。</li></ul>
            <blockquote> Why? People expect props like style and className to mean one specific thing. Varying this API for a subset of your app makes the code less readable and less maintainable, and may cause bugs.</blockquote>
            <div dangerouslySetInnerHTML={{__html: namingCode4}}/>

            <h2 style={{textAlign:'start'}} id="Declaration">声明</h2>
            <ul>
                <li><strong>组件命名</strong>：<code>不要使用｀displayName</code>属性来命名组件，应该使用类的引用名称。</li>
            </ul>
            <div dangerouslySetInnerHTML={{__html: declarationCode}}/>

            {/*<h2 style={{textAlign:'start'}} id="Alignment">对齐</h2>*/}
            {/*<ul>*/}
                {/*<li><strong>组件命名</strong>：为 JSX 语法使用下列的对其方式。eslint: react/jsx-closing-bracket-location</li>*/}
            {/*</ul>*/}
            {/*<div dangerouslySetInnerHTML={{__html: declarationCode}}/>*/}

        </div>
    );
}