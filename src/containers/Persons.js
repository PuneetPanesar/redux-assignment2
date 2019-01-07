import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/Action';
import {connect} from 'react-redux';

class Persons extends Component {
    state = {
        persons: []
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.ToAddPerson} />
                {this.props.prsn.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.ToDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
    prsn:state.persons
    }
}

const mapStateToDispatch=dispatch=>{
    return{
      ToAddPerson:()=>dispatch({type:actionTypes.ADD_PERSON}),
      ToDeletePerson:(id)=>dispatch({type:actionTypes.DELETE_PERSON,personId:id})
     }
}



export default connect(mapStateToProps,mapStateToDispatch)(Persons);