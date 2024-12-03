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


function populate_projects(projects) {
	const container = document.getElementById("projects-container")
	projects.forEach( (e) => {
		const new_card = document.createElement("div");
		const classes = ["project-card", "section-content"]
		new_card.classList = classes.join(" ");

		new_card.innerHTML = `
			<h1>${e.title}</h1>
			<p>${e.description}</p>
		`


		container.appendChild(new_card);
	})
}



const profile_info = {
	username: "Morgan Oakley",
	handle: "morgan"
}

const projects = [
	{
		title: "Super Cool Project",
		description: "Super cool project's descritpion with suff an things",
	},
	{
		title: "Less cool Project",
		description: "SOme description of a lesser project, dont in forgotten times",
	},
	{
		title: "Unicorn App",
		description: "Marvelous, yet more microservices than users ATM",
	},
	{
		title: "Super Cool Project",
		description: "Super cool project's descritpion with suff an things",
	},
	{
		title: "Less cool Project",
		description: "SOme description of a lesser project, dont in forgotten times",
	},
	{
		title: "Unicorn App",
		description: "Marvelous, yet more microservices than users ATM",
	},
	{
		title: "Super Cool Project",
		description: "Super cool project's descritpion with suff an things",
	},
	{
		title: "Less cool Project",
		description: "SOme description of a lesser project, dont in forgotten times",
	},
	{
		title: "Unicorn App",
		description: "Marvelous, yet more microservices than users ATM",
	},
	{
		title: "Super Cool Project",
		description: "Super cool project's descritpion with suff an things",
	},
	{
		title: "Less cool Project",
		description: "SOme description of a lesser project, dont in forgotten times",
	},
	{
		title: "Unicorn App",
		description: "Marvelous, yet more microservices than users ATM",
	},
]

populate_profile_info(profile_info);
populate_projects(projects);