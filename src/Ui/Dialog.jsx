import React from 'react';

const FormedContent = ({title, content}) => {
    return(
        <>
            <div className="dialog-title">
                {title}
            </div>
            <div className="dialog-content">
                {content}
            </div>
        </>
    )
}

class Dialog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
    }
    render(){
        const { title, content, opened, onClose } = this.props
        return(
            <div ref={r => this._self = r} style={{display: opened?'block':'none'}}>
                <div className="dialog-fade"></div>
                <div className="dialog">
                    <button 
                        onClick={_=>{
                            const a = this._self.animate([
                                    {
                                        opacity: '1'
                                    },{
                                        opacity: '0'
                                    }
                                ], {
                                    duration: 500
                                }
                            )
                            a.onfinish = () => {
                                this._self.remove();
                            };
                            onClose && onClose()
                        }}
                        className="dialog-close">
                        <img alt="close" src="/icon/close-outline.svg"/>
                    </button>
                    {
                        this.props.children
                        ||
                        <FormedContent
                            title={title} content={content}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default Dialog