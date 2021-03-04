import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";

const Dashboard = ({ auth: { user } }) => {
	// useEffect(() => {
	//   getCurrentProfile();
	// }, [getCurrentProfile]);

	return (
		<Fragment>
			<h1 className="large text-primary">Dashboard</h1>
			<p className="lead">
				<i className="fas fa-user"> Welcome {user && user.name}</i>
			</p>
			{/* {profile != null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div className="my-2"><button onClick={() => deleteAccount()} className="btn btn-danger">
            <i className="fas fa-user-minus">Delete My Account</i></button></div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet set up a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )} */}
		</Fragment>
	);
};

Dashboard.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, null)(Dashboard);
