import React, { Component } from 'react';
import GithubProfileCard from './GithubProfileCard';
import GithubProfileDetails from './GithubProfileDetails';

export default class GithubProfile extends Component {
    constructor(props){
        super(props);{
            
        }
    }
    render() {
       
        return (
            <div>
                <div class="container mt-4">
                    <div class="row">
                        <div class="col-md-4">
                          
                           {
                               Object.keys(this.props).length !== 0 ?
                               <GithubProfileCard profile={this.props.profile}/>:null
                           }
                         
                         </div>
                        <div class="col-md-8">
                           {
                               Object.keys(this.props).length !== 0 ?
                               <GithubProfileDetails profile={this.props.profile}/>:null
                           }
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
