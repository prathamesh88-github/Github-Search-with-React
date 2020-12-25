import React, { Component, fragment } from 'react'
import GithubProfile from './GithubProfile';
import Axios from 'axios';
import {clientId ,clientSecret} from './keys';
import GithubRepos from './GithubRepos';




export default class GithubAPI extends Component {
    
    constructor(props){
        super(props);{
            this.state={
                username:'',
                profile:null,
                repos:null
            }

        }
     
    }

    //two way data binding
    updateInput =(e)=>{
        this.setState({
            ...this.state,
            username:e.target.value
        });
    }
    //Form Submission
    searchUser =(e)=>{
        {
         e.preventDefault();
         this.searchProfile();
         this.searchRepos();
        }
    }

    searchProfile = () =>{
        Axios.get(`https://api.github.com/users/${this.state.username}?clientId=${clientId}&clientSecret=${clientSecret}`)
        .then((response) => {
            this.setState({
                profile:response.data
              });
        })
        .catch((err)=>{
            console.log(err);
        }
        
        );

    };
    searchRepos = () =>{
        Axios.get(`https://api.github.com/users/${this.state.username}/repos?clientId=${clientId}&clientSecret=${clientSecret}`)
        .then((response) => {
            this.setState({
                repos:response.data
              });
        })
        .catch((err)=>{
            console.log(err);
        }
        
        );

    };
    

    render() {
        return (
            
            <fragment>
               
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <div className="container mt-3">
                <div className="card">
                    <div className="row">
                        <div className="col">
                            
                                <div className="card-header bg-secondary text-white">
                                    <h3>Github Search</h3>
                            </div>
                            <div className="card-body">
                            <form onSubmit={this.searchUser}>
                                <div className="form-inline">
                                  <div className="form-group">
                                  <div>
                                  <input 
                                  onChange={this.updateInput}
                                  value={this.state.username}size="40"type="text" className="form-control" name="Username"  placeholder="Username"/>
                                  </div>                           
                                 <div >
                                 <button className="btn" 
                                 ><i class="fa fa-search "></i></button>

                                 </div> 
                                 </div> 
                                </div>

                            
                            </form>
                           
                      

                    </div>
                    </div>
                </div>
                <div className="card-body">
                <div class="container">
                    <div class="row">
                        <div class="col">
                           {
                               this.state.profile?
                               <GithubProfile profile={this.state.profile}/> :null
                           } 
                            
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                           {
                               this.state.repos?
                               <GithubRepos repos={this.state.repos}/> :null
                           } 
                            
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </fragment>
        )
    }
}
