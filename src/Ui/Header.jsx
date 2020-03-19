import React from 'react';

const Menu = ({list, opened}) => {
    return(
        <ul style={{display:opened?'block':'none'}} className="list header-list">
        {list.map((item, i)=>(
            <a href={item.href} className="list-item" key={i}>{item.text}</a>
        ))}
        </ul>
    )
}

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            opened: false
        }
    }
    componentDidMount(){
        document.body.addEventListener('click', ()=>{
            if(this.state.opened)this.setState({opened: false})
        })
    }
    render(){
        const { opened } = this.state
        return(
            <>
                <button
                    onClick={()=>{
                        this.setState({opened: !opened})
                    }}
                    className="btn btn-block btn-menu"
                >
                    <img
                        className={opened?"btn-menu-open":"btn-menu-close"}
                        alt="open the menu"
                        src="/icon/menu-outline.svg" width="80%" height="80%" 
                    />
                </button>
                <Menu
                    opened={opened}
                    list={[
                        {
                            text:'YUNGEEKER',
                            href:'#header'
                        }, {
                            text:'云极客工具',
                            href:'#ygktool'
                        }, {
                            text:'追梦路上',
                            href:'#history'
                        }, {
                            text:'关于我',
                            href:'#author'
                        }
                    ]}
                />
            </>
        )
    }
}

export default Header