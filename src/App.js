import React from 'react';
import './App.css';
import Header from './Ui/Header.jsx'
import './TimeLine.css'

const FirstPage = () => {
    return (
        <div id="header" className="App">
            <header className="App-header">
                <h1>
                    YUNGEEKER
                </h1>
                <p>
                    叩首问路，为梦而生<br></br>Since 2019.3
                </p>
            </header>
        </div>
    );
}

const SecondPage = ({active}) => {
    return(
        <div id="ygktool" className="App">
            <header className="App-header">
                <h1>
                    云极客工具YGKTOOL.CN
                </h1>
                <div className={`info-panel ${active?"info-panel-active":""}`}>
                    极简，强大，高效，励志做最轻盈最好用的在线工具。<br></br>以工匠精神打造功能丰富的在线工具，无需下载即可免费使用
                    <center>
                        <a href="https://www.ygktool.cn" className="btn btn-block btn-circle">                       
                            <img
                                src="/icon/arrow-forward-outline.svg" width="90%" height="90%" 
                                alt="visit ygktool.cn"
                            />
                        </a>
                    </center>
                </div>
            </header>
        </div>
    )
}

const ThirdPage = _ => {
    return(
        <div id="history" className="App">
            <header className="App-header">
                <h1>
                    追梦路上
                </h1>
                <div className="box">
                    <ul id="first-list">
                        {[{
                            title:'入坑',
                            date:'2019.3.31',
                            info:'在前辈的怂恿下买了域名，租了免费主机'
                        },{
                            title:'云社',
                            date:'2019.5',
                            info:'仅仅是简单修改模板，对前端开发的理解更为深入'
                        },{
                            title:'云极客工具',
                            date:'2019.7',
                            info:'为了提高自己的JavaScript水平创立工具网站，采用传统php技术栈'
                        },{
                            title:'NPM',
                            date:'2020.1',
                            info:'接触现代化前端开发，将云极客工具完全用React + Node技术栈重写'
                        }].map((item, i)=>(
                            <li key={i}>
                                <span></span>
                                <div className="title">{item.title}</div>
                                <div className="info">{item.info}</div>
                                <div className="time">
                                    <span>{item.date}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </div>
    )
}

const ForthPage = _ => {
    return(
        <div id="author" className="App">
            <header className="App-header">
                <h1>
                    关于我
                </h1>
                <div className="info-panel">
                    一个沙雕高中生
                    <center>
                        {[
                            {
                                icon:"logo-github",
                                href:"https://github.com/RiverTwilight"
                            },{
                                icon:"logo-twitter",
                                href:"https://mobile.twitter.com/renjie_wong",
                                hover: true
                            },{
                                icon:"mail-outline",
                                href:""
                            },{
                                icon:"logo-qq",
                                href:"//wpa.qq.com/msgrd?v=3&amp;uin=1985386335&amp;site=qq&amp;menu=yes",
                                hover: true
                            }
                        ].map((item, i)=>(
                        <a style={{display:'inline-block'}} key={i} href={item.href} className="btn-circle">                       
                            <img
                                onMouseOver={e=>{
                                    if(item.hover)e.target.src = "/icon/" + item.icon + "-hover.svg"
                                }}
                                onMouseLeave={e=>{
                                    e.target.src = "/icon/" + item.icon + ".svg"
                                }}
                                src={"/icon/" + item.icon + ".svg"} width="70%" height="70%" 
                                alt="visit ygktool.cn"
                            />
                        </a>
                        ))}
                    </center>
                </div>
            </header>
        </div>
    )
}


class Ui extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 1
        }
    }
    componentDidMount(){
        var { page } = this.state
        window.addEventListener('scroll', e => {
            // 获取的是浏览器可见区域高度（网页的可视区域的高度）（不滚动的情况下）
            var documentClientHeight = document.documentElement.clientHeight || window.innerHeight
            // 元素顶端到可见区域（网页）顶端的距离
            var htmlElementClientTop = e.target.scrollingElement.scrollTop;
            if(htmlElementClientTop > documentClientHeight * page){
                page ++ 
            }else if(htmlElementClientTop < documentClientHeight * (page - 1)){
                page --
            }
            this.setState({
                page: page
            })
        })
    }
    render(){
        const { page } = this.state
        return(
            <>
                <Header />
                <FirstPage />
                <SecondPage active={page === 2} />
                <ThirdPage />
                <ForthPage />
            </>
        )
    }
}
export default Ui;
