import React, { Component } from 'react';
import CommentCard from './commentCard/CommentCard'



import './Comments.css';


class Comments extends Component {
    render() {
        return (
            <div className="comments-container">
                <div className="row comment-row">
                    <div className="col-md-12">
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                    </div>
                </div>
                <div className="row add-comment">
                    <p>
                        <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Add comment
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life 
                            accusamus terry richardson ad squid. Nihil anim keffiyeh 
                            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comments;