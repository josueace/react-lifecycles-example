// src/components/Counter.js

import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 10,
        };
        console.log('I am in the CONSTRUCTOR of the Counter.js.');

    }

    counter = () =>{
       
        //https://medium.com/better-programming/when-to-use-callback-function-of-setstate-in-react-37fff67e5a6c
        //https://itnext.io/react-setstate-usage-and-gotchas-ac10b4e03d60

        this.setState(
           
            (prevState3) => // send me the prevstate in the call back and I do the rest
               // ( {count: prevState3.count + 1} )
                //same as above
                {
                   // alert(prevState3.count+ ' some start');// in constructor we have put prevstate
                   alert(prevState3.count);
                    return {count: prevState3.count + 1};
                }

         )

         //same as

         /*
         this.setState(
            (prevState3) => 
                ( {count: prevState3.count + 1} ) // so looks like => {return...}    is same as => ()
    
         )
        */

        // same as
         
        /*
         this.setState({
         count: +this.state.count + 1
             }, () => {
          alert(this.state.count);  // you can also put this in componnentdidupdate
         })
        */

        //bad if callbak is passed as second parameter the callback does not get any call back parameter
       /* 
        this.setState({
            count: +this.state.count + 1
                },
            (prevState3) => // prevstate3 heres is undefined
               
                {
                  
                   alert(prevState3.count);
                    return {count: prevState3.count + 1};
                }

         )
         */


      }
  
    componentDidMount() {// start timer after mount
      this.timer = setInterval(this.counter, 100);
      console.log('Component DID MOUNT.');
    }
    
    componentDidUpdate(prevProps, prevState2) {//callback parameters
        console.log('Component Counter UPDATED from: ', prevState2.count);
    }

    componentWillUnmount() {//stop timer un dismouunt
        console.log("======== Component COUNTER is UNMOUNTED! ========");
        clearInterval(this.timer); // !!!
    }
    
  
    render() {
        console.log('I am in the RENDER of the Counter.');
        return  (
            <h1> { this.state.count }</h1>
        ) 
    }
  }

  export default Counter;