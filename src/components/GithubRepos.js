import React, { Component, Fragment } from 'react'

export default class GithubRepos extends Component {
    render() {
        
        return (
         <Fragment>
             
                  <div className="col-md-12">
                  <div className="card mt-3">
            
                 <div className="card-header bg-secondary text-white">
                     <h3>Github Repositories</h3>
                 </div>
                 <div className="card-body ">
                 
                 <table className="table table-hover  table-striped mt-4">
                 <thead className="bg-light text-dark ">
                    <tr>
                      <th>Repository Name</th>  
                      <th>Stars</th>
                      <th>Watches</th>   
                    </tr>
                </thead>
                <tbody>
                    
                 
                   
                        {
                            this.props.repos.map((repo)=>{
                                return(
                                    <tr>
                                  <td> <a href={repo.html_url} target="_blank">{repo.name}</a></td> 
                                  <td><span className="badge badge-success ">{repo.stargazers_count} stars</span></td>
                                  <td><span className="badge badge-warning ">{repo.watchers_count} watches</span></td> 
                                
                                    </tr>
                                    
                                )
                            })
                        }
                   
                     </tbody>
                     
                </table>
                 
                </div>
                </div>
                 </div>
         </Fragment>
        )
    }
}
