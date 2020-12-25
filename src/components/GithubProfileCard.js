import React, { Component, Fragment } from 'react'

export default class GithubProfile extends Component {
    constructor(props){
        super(props);{
            
        }
    }
    render() {
        let{name,avatar_url,bio,html_url}=this.props.profile;
       
        return (
            <Fragment>
                           <div class="card ">
                               <img src={avatar_url} alt="" className='img-fluid'/>
                           <div class="card-body">
                               <h6 className="card-title font-weight-bold">{name}</h6>
                               <p>{bio}</p><hr/>
                              
                               <a href={html_url} target="_blank" className="col-md-12 text-center btn btn-secondary btn-sm">Profile</a>
                               </div>
                                  </div>
                                
                             
            </Fragment>
        )
    }
}
