import React from 'react'
import UserOkrItems from './UserOkrItems'

function UserOkr({okr}) {
    return (

        <div className="grey-bg container-fluid mt-4" style={{ backgroundColor: "#050531", borderRadius: "10px", padding:"30px" }} >
            <section id="minimal-statistics">
                <div class="row">
                    <div className="col-12 mt-3 mb-1" style={{ color: "#f9f9f9" }}>
                        <h6 className="text-uppercase">{okr.name}</h6>
                    </div>
                </div>
                <div className="row">
                {okr.okrs.map((kr) => ( <UserOkrItems kr={kr}/>))}
                 
                </div>
            </section>
        </div>
    )
}

export default UserOkr
