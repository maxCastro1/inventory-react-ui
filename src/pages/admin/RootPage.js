import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from "react-router-dom";
import "../../style/admin.css";
import HeaderNavBar from "../../components/navigation/HeaderNavbar";
import AnchorTag from "../../components/Anchortag";
import AdminSettingsPage from "../../pages/admin/settings/SettingsPage";
import AdminShopPage from "../../pages/admin/shop/AdminShopPage";


class AdminRootPage extends Component{
    constructor(props){
        super(props);
        this.userRole = "admin";
        
        let {path, url} = this.props.match;
        console.log(this.props);
    }


    render(){
        return (
                <div>
                    <HeaderNavBar></HeaderNavBar>
                    <div className="admin-page mx-auto mt-5">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-3">
                                    <div className="list-group">
                                        <AnchorTag link={`${this.props.match.path}/`} liClassName="" className="list-group-item list-group-item-action" itemValue="Dashboard"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/shop/shop-list`} liClassName="" className="list-group-item list-group-item-action" itemValue="Shop"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/settings/role-list`} liClassName="" className="list-group-item list-group-item-action" itemValue="Role"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/settings/user-list`} className="list-group-item list-group-item-action" itemValue="System User"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/settings/password-reset`} className="list-group-item list-group-item-action" itemValue="Password Reset"></AnchorTag>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <Switch>
                                        <Route path={`${this.props.match.path}/shop`} component={AdminShopPage}/>
                                        <Route path={`${this.props.match.path}/settings`} component={AdminSettingsPage}/>
                                    </Switch>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        ) 
    }
}

export default AdminRootPage;