import * as React from 'react';
import "./styles.css";

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="col py-1 panel-view">
                <section className="section container px-5" style={{
                    marginTop: '90px'
                }}>
                    <div className="row clearfix">
                        <div className="col-lg-12">
                            <div className="card chat-app">
                                <div id="plist" className="people-list">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-search"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Search..." />
                                    </div>
                                    <ul className="list-unstyled chat-list mt-2 mb-0">
                                        <li className="clearfix">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
                                            <div className="about">
                                                <div className="name">Vincent Porter</div>
                                                <div className="status"> <i className="fa fa-circle offline"></i> left 7 mins ago </div>
                                            </div>
                                        </li>
                                        <li className="clearfix active">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                            <div className="about">
                                                <div className="name">Aiden Chavez</div>
                                                <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="chat">
                                    <div className="chat-header clearfix">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                                </a>
                                                <div className="chat-about">
                                                    <h6 className="m-b-0">Aiden Chavez</h6>
                                                    <small>Last seen: 2 hours ago</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-history">
                                        <ul className="m-b-0">
                                            <li className="clearfix">
                                                <div className="message-data text-right">
                                                    <span className="message-data-time">10:10 AM, Today</span>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                                </div>
                                                <div className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                            </li>
                                            <li className="clearfix">
                                                <div className="message-data">
                                                    <span className="message-data-time">10:12 AM, Today</span>
                                                </div>
                                                <div className="message my-message">Are we meeting today?</div>
                                            </li>
                                            <li className="clearfix">
                                                <div className="message-data">
                                                    <span className="message-data-time">10:15 AM, Today</span>
                                                </div>
                                                <div className="message my-message">Project has been already finished and I have results to show you.</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="chat-message clearfix">
                                        <div className="input-group mb-0">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-send"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Enter text here..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Page;