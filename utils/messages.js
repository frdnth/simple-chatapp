const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" })

function formatMessage(username, text) {
	return {
		username,
		text,
		time: `${timeNow}`
	}
}

module.exports = formatMessage