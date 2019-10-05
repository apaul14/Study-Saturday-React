import React from 'react'
import ReactDOM from 'react-dom'
//import Students from "'./db'"
import axios from 'axios'




export default class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            students: []
    }

    }
     componentDidMount(){
       this.getStudents()
    }
    async getStudents(){
       // await componentDidMount()
        
        const {data} = await axios.get('/student')
        try {
            this.setState({
                students : data
            })
        } catch (error) {
            
        }
    }

   render(){
       console.log(this.state.students)
       return (
           <div>
               <ul>
                   {this.state.students.map(elem => {
              return <li key = {elem.id}> {elem.fullName} </li>
            })}
                </ul>
           </div>
       )
   }
}

//ReactDOM.render(<Main />, document.getElementById('app'))