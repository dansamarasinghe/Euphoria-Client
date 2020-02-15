import React, {Component} from 'react';
import AdminNavbar from "../../components/admin/AdminNavbar";

class AdminDashboard extends Component{
    render(){
        return(
            <div className="container">
                <AdminNavbar/>
            </div>
        );
    }
}

export default AdminDashboard;