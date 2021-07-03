import {GlHeader} from "gitlanding/GlHeader";
import type {GlHeaderProps} from "gitlanding/GlHeader";
import {memo, useMemo} from "react";


export const Header = memo(()=>{

	const menuItems: GlHeaderProps["links"] = useMemo(() => {

		return [

			{
				"label": "GITHUB",
				"link": { "href": "https://github.com/thieryw/gitlanding" },
			},
			{
				"label": "DOCUMENTATION",
				"link": { "href": "https://docs.gitlanding.dev/" },
			},
			{
				"label": "STORYBOOK",
				"link": {
					"href": "https://sb.gitlanding.dev"
				}
			}
		]



	}, [])


	return (
		<GlHeader
			links={menuItems}
			title="GL"
			enableDarkModeSwitch={true}
			githubRepoUrl="https://github.com/thieryw/gitlanding"
			githubButtonSize="large"
		/>
	)

})