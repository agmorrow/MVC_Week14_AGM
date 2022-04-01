const moment = require("moment");

module.exports = {
	toUpperCase: string => string.toUpperCase(),
	toLowerCase: string => string.toLowerCase(),
	format_date: string => moment(string, "lll").format("L")
}
