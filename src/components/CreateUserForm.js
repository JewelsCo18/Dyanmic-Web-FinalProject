import React from 'react'; 

function CreateUserForm({signUpUser}) {
    return (
    <div className="Form">
        <form onSubmit={(e) =>signUpUser(e)}>
            <label htmlFor="displayName"> Name </label>
            <input type="displayName" name = "displayName" placeholder="Enter Name" />

            <label htmlFor="email"> Email </label>
            <input type="email" name = "email" placeholder="Enter Email" />

            <label htmlFor="password"> Password </label>
            <input type="password" name = "password" placeholder="******" />

            <button type="submit"> Submit </button>
        </form>
    </div> 
    );
}

export default CreateUserForm; 

