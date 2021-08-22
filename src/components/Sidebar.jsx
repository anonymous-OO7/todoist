import React from 'react'
// import { FaInbox} from from 'react-icons/fa';
function Sidebar({ selectedTab, setSelectedTab }) {

	console.log({ selectedTab });
	return (
		<div className="sidebar">

			<div className="active" onClick={() => setSelectedTab("INBOX")}>Inbox</div>
			<div onClick={() => setSelectedTab("TODAY")} >Today</div>
			<div onClick={() => setSelectedTab("NEXT7")} >Next 7 Days</div>
		</div>
	)
}

export default Sidebar
