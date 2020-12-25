import React, { Component, Fragment } from 'react'

export default class GithubProfile extends Component {
    constructor(props){
        super(props);{
            
        }
    }
    render() {
        let {followers,following,public_repos,public_gists,name,location,email,company,blog,created_at,html_url}=this.props.profile;
       
        return (
           <Fragment>
               <div className="card">
                   <div className="card-header bg-light">
                       <span className="badge badge-primary mr-2">{followers} followers</span>
                       <span className="badge badge-success mr-2">{public_repos} Repos</span>
                       <span className="badge badge-warning mr-2">{public_gists} Gists</span>
                       <span className="badge badge-danger mr-2">{following} following</span>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">Username : {name}</li>
                            <li className="list-group-item">Location : {location}</li>
                            <li className="list-group-item">Email : {email}</li>
                            <li className="list-group-item">Company : {company}</li>
                            <li className="list-group-item">Blog : {blog}</li>
                            <li className="list-group-item">Member since : {created_at}</li>
                            <li className="list-group-item">Profile URL : {html_url}</li>

                        </ul>
                    </div>

               </div>
           </Fragment>
        )
    }
}
