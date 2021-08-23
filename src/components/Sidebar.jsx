import React from 'react'
// import { FaInbox} from from 'react-icons/fa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faInbox, faCalendarWeek, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'




function Sidebar({ selectedTab, setSelectedTab }) {

	console.log({ selectedTab });


	return (
		<div className="sidebar">

			<div className={selectedTab === 'INBOX' ? `active` : ''} onClick={() => setSelectedTab("INBOX")}><FontAwesomeIcon icon={faInbox} />Inbox</div>
			<div className={selectedTab === 'TODAY' ? `active` : ''} onClick={() => setSelectedTab("TODAY")} ><FontAwesomeIcon icon={faCalendarWeek} />Today</div>
			<div className={selectedTab === 'NEXT7' ? `active` : ''} onClick={() => setSelectedTab("NEXT7")} ><FontAwesomeIcon icon={faEnvelopeOpenText} />Next 7 Days</div>
		</div>
	)
}

export default Sidebar
