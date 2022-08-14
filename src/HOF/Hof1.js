import React from "react";







function Hof1 (WrappedComponent){

    return class extends React.Component{

        constructor(props) {
            super(props);
        }

        render(){


            return(

                  <div className="hof1_style">

                      <WrappedComponent  {...this.props}/>

                  </div>

            );




        }




    }


    //   return(
  //
  //       <div className="hof1_style">
  //
  //           <WrappedComponent  />
  //
  //       </div>
  //
  // );



}

export default Hof1;