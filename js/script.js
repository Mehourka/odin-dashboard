function populate_profile_info(profile_info) {
	const name_nodes = document.querySelectorAll(".user-name");
	const handle_nodes = document.querySelectorAll(".user-handle");
	console.log(name_nodes);

	name_nodes.forEach((e) => {
		e.textContent = profile_info.username
	})

	handle_nodes.forEach((e) => {
		e.textContent = "@" + profile_info.handle;
	})

}

const profile_info = {
	username: "Morgan Oakley",
	handle: "morgan"
}

populate_profile_info(profile_info);