import React, { Component } from 'react';
class Carousal extends Component {
    constructor(){
        super();
        this.state = {
            index:0
        }
    }
    leftButtonHandler = () => {
       let userCount = this.props.userList&& this.props.userList.length;
       console.log(this.state.index)

       if(this.state.index>0 && this.state.index<=userCount){
           var index = this.state.index;
           this.setState({index: index - 1})
           let nuj = this.state.index;
           if(nuj>=0){
            document.getElementById("detail" + Number(nuj )).classList.add("div-slider")
            document.getElementById("detail" + Number(nuj )).style.transform =`translateX(calc( ${nuj - 1} * (-125%)))`;
                document.getElementById("detail" + Number(nuj -1 )).classList.add("div-slider")
                document.getElementById("detail" +  Number(nuj - 1 )).style.transform =`translateX(calc( ${nuj - 1} *(-125%)))`;
           }

       }
   
    };
    rightButtonHandler = () => {
        let userCount = this.props.userList&& this.props.userList.length;
        if(this.state.index>=0 && this.state.index<userCount-1){
            var index = this.state.index;
            this.setState({index: index + 1})
           let nuj = this.state.index;
           if(nuj>=0){
            document.getElementById("detail" + nuj).classList.add("div-slider")
            document.getElementById("detail" + nuj).style.transform =`translateX(calc(${nuj + 1} * (-125%)))`;
            if(nuj < userCount-1){
                document.getElementById("detail" + Number(nuj + 1 )).classList.add("div-slider")
                document.getElementById("detail" +  Number(nuj + 1 )).style.transform =`translateX(calc(${nuj + 1} * (-125%)))`;
            }
           }
        }  
    }
    render(){
        console.log(this.props.userList)
        let dalaList =[];
       this.props.userList.forEach((obj, index) => {
        dalaList.push(
            <div className="detail-list-container" id={"detail"+ index} style={{"height": this.props.height}}>
            <div> 
              <div className="detail-list">
                <div className="list-label"> {"From City"}</div>
                <div className="list-value">{obj.From}</div>
              </div>
              <div className="detail-list">
                <div className="list-label"> {"To City"}</div>
                <div className="list-value">{obj.To}</div>
              </div>
              <div className="detail-list">
                <div className="list-label"> {"Travel Date"}</div>
                <div className="list-value">{obj.Date}</div>
              </div>
              <div className="detail-list">
                <div className="list-label"> {"PNR"}</div>
                <div className="list-value">{obj.PNR}</div>
              </div>
              <div className="detail-list">
                <div className="list-label"> {"Mode of Travel"}</div>
                <div className="list-value">{obj.Mode}</div>
              </div>
              <div className="detail-list">
                <div className="list-label"> {"Purpose of Travel"}</div>
                <div className="list-value">{obj.Purpose}</div>
              </div>
              </div>
            </div>
        );
       });
       let bottomSection =[];
       this.props.userList.forEach((obj, index) => {
         bottomSection.push(
            <div className={this.state.index === index ?"round-filled":"round"}></div>
         )
       });
        var totalLength= this.props.userList?this.props.userList.length * 25 + "px":0;
        console.log(totalLength)
        return(
            <div className="carouser-container">
                {dalaList}
                <div className="left-icon" onClick={() => this.leftButtonHandler()}> </div>
                <div className="right-icon" onClick={() => this.rightButtonHandler()}></div>
                
                <div className="bottom-box" style={{"width": totalLength}}>
                    {/* <div className="round"></div>
                    <div  className="round-filled"></div>
                    <div  className="round"></div> */}
                    {bottomSection}
                </div>
            </div>
        );
    }
}
export default Carousal;